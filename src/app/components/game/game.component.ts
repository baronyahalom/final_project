import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HexServiceService } from 'src/app/services/hex-service.service';
import { ModalService } from 'src/app/_modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  template: `
    <div id="lalala" >
      <canvas #canvas style=" padding-right: 0; padding-left:0; margin-left: auto; margin-right: auto; display: block; " width="850" height="500" id="output" >Canvas not supported...</canvas>
    </div>
    <div id="back">
      <input id="button1" type=button value="make a move back <" style="width:300px;font-size:15px" (click)="Back();Back();addToCount()" title="two moves back">
    </div>
    <br/>
    <h2>When you finish the game, you will move to the <strong>game questions part</strong></h2>
    <jw-modal id="custom-modal-1">
      <h1>How well do know your opponent strategy?</h1>
      <br/>
      <div class="form-group col-6">
        <form [formGroup]="q1Form" (ngSubmit)="saveAns('custom-modal-1') ">
          <select formControlName="q1" id="modalQ1" class="form-control" [ngClass]="{ 'is-invalid': IsNotq1 && f.q1.errors}">
            <option value="" disabled>Please choose a number between 1-10</option>
            <option *ngFor="let option of options" [ngValue]="option" >{{option}}</option>
          </select>
          <div class="invalid-feedback" *ngIf="IsNotq1 || f.q1.errors">
            <sup>*</sup>Please enter correct rate
          </div>
          <br/>
          <button class="buttonModal" type="submit" >Continue</button>
      </form>
      </div>
    </jw-modal>
    <jw-modal id="custom-modal-2">
      <h1>How well do know your opponent strategy?</h1>
      <div class="form-group col-6">
      <form [formGroup]="q2Form" (ngSubmit)="saveAns('custom-modal-2') ">
      <select formControlName="q2" id="modalQ2" class="form-control" [ngClass]="{ 'is-invalid':  IsNotq2 && f2.q2.errors}">
        <option value="" disabled>Please choose a number between 1-10</option>
        <option *ngFor="let option of options" [ngValue]="option" >{{option}}</option>
      </select>
      <div class="invalid-feedback" *ngIf="IsNotq2  || f2.q2.errors ">
        <sup>*</sup>Please enter correct rate
      </div>
        <br/>
        <button  type="submit" >Continue</button>
      </form>
      </div>
    </jw-modal>
  `,
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  r = 20;
  w = this.r * 2 * (Math.sqrt(3) / 2);
  sel = [-1, -1];
  board = new Array(14);
  hist = [];
  player = 0;
  multiplayer = false;
  active = true;
  IsOver = true;
  Size = 14;
  IsRunning = false;
  LastEvent = '';
  MaxFld = this.Size * this.Size;
  ActiveColor = 0;
  IsPlayer = new Array(2);
  // set AI to 0 means it's false and it's not AI
  IsAI = 0;
  Level = new Array(2);
  ImgNum = new Array(this.Size);
  Fld = new Array(this.Size);
  Pot = new Array(this.Size);
  Bridge = new Array(this.Size);
  Upd = new Array(this.Size);
  History = new Array(this.MaxFld + 1);
  vv = new Array(6);
  tt = new Array(6);
  i;
  j;
  Start0;
  MoveCount;
  MaxMoveCount;
  IsSwap;

  // define who start the game - true for real player and false for computer player
  IsStart0 = true;
  private timer;
  options: string[] ;
  IsNotq1: boolean;
  IsNotq2: boolean;
  q1 = '0';
  q2 = '0';
  counterMoveBack = 0;
  constructor(private modalService: ModalService , private hexService: HexServiceService, private router: Router, private fb: FormBuilder) {
  }
  q1Form = this.fb.group({
    q1 :  ['', [Validators.required]]
  });
  q2Form = this.fb.group({
    q2 :  ['', [Validators.required]]
  });
  tutorialAns = '';
  ngOnInit(): void {
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      e.returnValue = '';
    });
    if (sessionStorage.getItem('isPlay') === null){
      this.router.navigate(['/', 'pageNotFound']);
    }
    else{
      sessionStorage.removeItem('isPlay');
    }
    this.tutorialAns = sessionStorage.getItem('tutorialAns');
    sessionStorage.removeItem('tutorialAns');
    const userID = sessionStorage.getItem('userID');
    this.isItUserFromDB(userID);
  }

  get f() { return this.q1Form.controls; }
  get f2() { return this.q2Form.controls; }

  isItUserFromDB(userID){
    this.hexService.get(userID)
      .subscribe(
        data => {
          console.log(data);
          console.log(true);
          this.ctx = this.canvas.nativeElement.getContext('2d');
          this.SetLevel(1, 2);
          this.initCanvas();
          this.initParam();
          this.Init();
          this.options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
          window.setInterval(() => this.Timer(), 200);
        },
        error => {
          console.log(error);
          this.router.navigate(['/', 'pageNotFound']);
        });
  }

  @HostListener('mousemove', ['$event'])
  handleMousemove(event) {
    this.getSel(event);
    if (this.active) {
      this.draw();
    }
  }
  @HostListener('mousedown', ['$event'])
  handleMousedown(event) {
    // let txt;

    this.getSel(event);
    this.Clicked(this.sel[0], this.sel[1]);
  }



  saveAns(id: string) {
    if (id === 'custom-modal-1'){
      if (this.q1Form.get('q1').value === ''){
        this.IsNotq1 = true;
        return;
      }
      else{
        this.IsNotq1 = false;
        this.q1 = this.q1Form.get('q1').value;
        console.log(this.q1);
      }

    }
    if (id === 'custom-modal-2'){
      if (this.q2Form.get('q2').value === ''){
        this.IsNotq2 = true;
        return;
      }
      else{
        this.IsNotq2 = false;
        this.q2 = this.q2Form.get('q2').value;
        console.log(this.q2);
      }
      console.log(this.q2);

    }
    this.modalService.close(id);
  }

  addToCount(){
    this.counterMoveBack = this.counterMoveBack + 1;
  }

  initParam(){
    for (this.i = 0; this.i < this.Size; this.i++) {
      this.ImgNum[this.i] = new Array(this.Size);
    }

    for (this.i = 0; this.i < this.Size; this.i++) {
      this.Fld[this.i] = new Array(this.Size);
    }

    for (this.i = 0; this.i < this.Size; this.i++) {
      this.Pot[this.i] = new Array(this.Size);
    }
    for (this.i = 0; this.i < this.Size; this.i++)
    {
      for (this.j = 0; this.j < this.Size; this.j++) {
        this.Pot[this.i][this.j] = new Array(4);
      }
    }

    for (this.i = 0; this.i < this.Size; this.i++) {
      this.Bridge[this.i] = new Array(this.Size);
    }
    for (this.i = 0; this.i < this.Size; this.i++)
    {
      for (this.j = 0; this.j < this.Size; this.j++) {
        this.Bridge[this.i][this.j] = new Array(4);
      }
    }

    for (this.i = 0; this.i < this.Size; this.i++) {
      this.Upd[this.i] = new Array(this.Size);
    }

    for (this.i = 0; this.i < this.MaxFld + 1; this.i++) {
      History[this.i] = new Array(2);
    }
// define which player is playing for now, 0- real player, 1- computer player
    this.IsPlayer[0] = true;
    this.IsPlayer[1] = false;
    // define which level each player when both of the players are computers
    this.Level[0] = 2;
    this.Level[1] = 3;
  }


  // initialize the board to be empty
  initCanvas() {
    // this.canvas = document.getElementById('output');
    // ctx = canvas.getContext('2d');
    for (let i = 0; i < 14; i++)
    {
      this.board[i] = new Array(14);
      for (let j = 0; j < 14; j++) {
        this.board[i][j] = -1;
      }
    }
    this.ctx.clearRect(0, 0, 850, 500);
    this.ctx.lineWidth = 1;

    this.ctx.fillStyle = 'rgb(255,0,39)';
    this.ctx.beginPath();
    this.ctx.moveTo(this.w * 15.65, this.r);
    this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
    this.ctx.lineTo(0, this.r);
    this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle =  'rgb(0,154,172)';
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.r);
    this.ctx.lineTo(this.w * 15.65, this.r);
    this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
    this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
    this.ctx.closePath();
    this.ctx.fill();

    let num = 0;
    this.ctx.strokeStyle = 'white';
    for (let y = 0; y < 14; y++)
    {
      for (let x = 0; x < 14; x++)
      {
        if (this.board[x][y] === 0) {
          this.ctx.fillStyle = 'rgb(255,0,39)';
        }
        else if (this.board[x][y] === 1) {
          this.ctx.fillStyle = 'rgb(0,154,172)';
        }
        else if (x === this.sel[0]  &&  y === this.sel[1]) {
          this.ctx.fillStyle = 'rgb(' + (x + (this.player === 0 ? 241 : 0)) + ',' + (y + (this.player === 0 ? 0 : 140)) +
            ',' + (this.player === 0 ? 38 : 171) + ')';
        }
        else {
          this.ctx.fillStyle = 'rgb(' + (x + 241) + ',' + (y + 220) + ',178)';
        }
        this.drawHexagon(this.ctx, (x + y) * this.w - (y - 4) * (this.w / 2), (y + 2) * 1.5 * this.r, this.r);
        num++;
      }
    }
    // canvas.onmousedown = this.mouseDown;
  }

  drawHexagon(c, x, y, r)
  {
    c.beginPath();
    c.moveTo(x, y - r);
    for (let i = 0; i < 6; i++) {
      c.lineTo(x + r * Math.cos(Math.PI * (1.5 + 1 / 3 * i)), y + r * Math.sin(Math.PI * (1.5 + 1 / 3 * i)));
    }
    c.closePath();
    c.fill();
    c.stroke();
  }

  getSel(e)
  {
    // get the color where the mouse clicked
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const scaleX = this.canvas.nativeElement.width / rect.width;

    const color = this.ctx.getImageData((e.clientX - rect.left) * scaleX, e.clientY, 1, 1).data;
    color[0] -= color[2] === 38 || color[2] === 178 ? 241 : 0;
    color[1] -= color[2] === 178 ? 220 : (color[2] === 38 ? 0 : 140);
    if (color[0] >= 0  &&  color[0] <= 13  &&  color[1] >= 0  &&  color[1] <= 13  &&  (color[2] === 38  ||  color[2] === 171  ||  color[2] === 178)) {
      this.sel = [color[0], color[1]];
    }
    else {
      this.sel = [-1, -1];
    }
  }

   draw()
  {
    this.ctx.clearRect(0, 0, 850, 600);
    this.ctx.lineWidth = 1;

    this.ctx.fillStyle = 'rgb(255,0,39)';
    this.ctx.beginPath();
    this.ctx.moveTo(this.w * 15.65, this.r);
    this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
    this.ctx.lineTo(0, this.r);
    this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle =  'rgb(0,154,172)';
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.r);
    this.ctx.lineTo(this.w * 15.65, this.r);
    this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
    this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
    this.ctx.closePath();
    this.ctx.fill();

    let num = 0;
    this.ctx.strokeStyle = 'white';
    for (let y = 0; y < 14; y++)
    {
      for (let x = 0; x < 14; x++)
      {
        if (this.Fld[x][y] === -1) {
          this.ctx.fillStyle = 'rgb(255,0,39)';
        }
        else if (this.Fld[x][y] === 1) {
          this.ctx.fillStyle = 'rgb(0,154,172)';
        }
        else if (x === this.sel[0]  &&  y === this.sel[1]) {
          this.ctx.fillStyle = 'rgb(' + (x + (this.player === 0 ? 241 : 0)) + ',' + (y + (this.player === 0 ? 0 : 140)) +
            ',' + (this.player === 0 ? 38 : 171) + ')';
        }
        else {
          this.ctx.fillStyle = 'rgb(' + (x + 241) + ',' + (y + 220) + ',178)';
        }
        this.drawHexagon(this.ctx, (x + y) * this.w - (y - 4) * (this.w / 2), (y + 2) * 1.5 * this.r, this.r);
        num++;
      }
    }

  }

  Init()
  {
    if (this.IsRunning)
    {
      this.LastEvent = 'Init()';
      return;
    }
    // fill Fld with zeroes - empty board
    for (let ii = 0; ii < this.Size; ii++)
    {
      for (let jj = 0; jj < this.Size; jj++) {
        this.Fld[ii][jj] = 0;
      }
    }
    // checking which player is starting
    if (this.IsStart0) {
      this.Start0 = true;
    }
    else {
      this.Start0 = false;
    }

    this.MoveCount = 0;
    this.MaxMoveCount = 0;

    this.WritePot(true);
    this.IsOver = false;
  }

  WritePot(bb)
  {
    // if it's not computer
    if (!this.IsAI) {
      return;
    }
    if (bb) {
      this.GetPot(2);
    }
    for (let ii = 0; ii < this.Size; ii++)
    {
      for (let jj = 0; jj < this.Size; jj++)
      {   window.document.getElementById('Pot0' + ii + jj).title = String(Math.round(this.Pot[ii][jj][0]));
          window.document.getElementById('Pot1' + ii + jj).title = String(Math.round(this.Pot[ii][jj][1]));
          window.document.getElementById('Pot2' + ii + jj).title = String(Math.round(this.Pot[ii][jj][2]));
          window.document.getElementById('Pot3' + ii + jj).title = String(Math.round(this.Pot[ii][jj][3]));
          window.document.getElementById('Pot0' + ii + jj).style.backgroundColor = this.BluePotCol(this.Pot[ii][jj][0]);
          window.document.getElementById('Pot1' + ii + jj).style.backgroundColor = this.BluePotCol(this.Pot[ii][jj][1]);
          window.document.getElementById('Pot2' + ii + jj).style.backgroundColor = this.RedPotCol(this.Pot[ii][jj][2]);
          window.document.getElementById('Pot3' + ii + jj).style.backgroundColor = this.RedPotCol(this.Pot[ii][jj][3]);
      }
    }
  }

  GetPot(llevel)
  {
    let nn;
    let bb;
    const dd = 128;
    this.ActiveColor = ((this.MoveCount + 1 + this.Start0) % 2) * 2 - 1;
    for (let ii = 0; ii < this.Size; ii++)
    {
      for (let jj = 0; jj < this.Size; jj++)
      {
        for (let kk = 0; kk < 4; kk++)
        {
          this.Pot[ii][jj][kk] = 20000;
          this.Bridge[ii][jj][kk] = 0;
        }
      }
    }
    for (let ii = 0; ii < this.Size; ii++)
    {
      if (this.Fld[ii][0] === 0) {
        this.Pot[ii][0][0] = dd;
      }// blue border
      else
      {
        if (this.Fld[ii][0] > 0) {
          this.Pot[ii][0][0] = 0;
        }
      }
      if (this.Fld[ii][this.Size - 1] === 0) {
        this.Pot[ii][this.Size - 1][1] = dd;
      }// blue border
      else
      {
        if (this.Fld[ii][this.Size - 1] > 0) {
          this.Pot[ii][this.Size - 1][1] = 0;
        }
      }
    }
    for (let jj = 0; jj < this.Size; jj++)
    {
      if (this.Fld[0][jj] === 0) {
        this.Pot[0][jj][2] = dd;
      }// red border
      else
      {
        if (this.Fld[0][jj] < 0) {
          this.Pot[0][jj][2] = 0;
        }
      }
      if (this.Fld[this.Size - 1][jj] === 0) {
        this.Pot[this.Size - 1][jj][3] = dd;
      }// red border
      else
      {
        if (this.Fld[this.Size - 1][jj] < 0) {
          this.Pot[this.Size - 1][jj][3] = 0;
        }
      }
    }
    for (let kk = 0; kk < 2; kk++)// blue potential
    {
      for (let ii = 0; ii < this.Size; ii++)
      {
        for (let jj = 0; jj < this.Size; jj++) {
          this.Upd[ii][jj] = true;
        }
      }
      nn = 0;
      do
      { nn++;
        bb = 0;
        for (let ii = 0; ii < this.Size; ii++)
        {
          for (let jj = 0; jj < this.Size; jj++)
          { if (this.Upd[ii][jj]) { bb += this.SetPot(ii, jj, kk, 1, llevel); }
          }
        }
        for (let ii = this.Size - 1; ii >= 0; ii--)
        { for (let jj = this.Size - 1; jj >= 0; jj--)
        { if (this.Upd[ii][jj]) { bb += this.SetPot(ii, jj, kk, 1, llevel); }
        }
        }
      }
      while ((bb > 0) && (nn < 12));
    }
    for (let kk = 2; kk < 4; kk++)// red potential
    { for (let ii = 0; ii < this.Size; ii++)
    { for (let jj = 0; jj < this.Size; jj++) {
      this.Upd[ii][jj] = true;
    }
    }
      nn = 0;
      do
      { nn++;
        bb = 0;
        for (let ii = 0; ii < this.Size; ii++)
        { for (let jj = 0; jj < this.Size; jj++)
        { if (this.Upd[ii][jj]) { bb += this.SetPot(ii, jj, kk, -1, llevel); }
        }
        }
        for (let ii = this.Size - 1; ii >= 0; ii--)
        { for (let jj = this.Size - 1; jj >= 0; jj--)
        { if (this.Upd[ii][jj]) { bb += this.SetPot(ii, jj, kk, -1, llevel); }
        }
        }
      }
      while ((bb > 0) && (nn < 12));
    }
  }

  RedPotCol(aa)
  { let xx = 0;
    const hh = '0123456789abcdef';
    if (aa > 0) {
      xx = aa;
    }
    const nn = Math.floor(255 / (1 + xx / 255));
    return('#' + hh.charAt(Math.floor(nn / 16)) + hh.charAt(nn % 16) + '0000');
  }
  BluePotCol(aa)
  { let xx = 0;
    const hh = '0123456789abcdef';
    if (aa > 0) {
      xx = aa;
    }
    const nn = Math.floor(255 / (1 + xx / 255));
    return('#0000' + hh.charAt(Math.floor(nn / 16)) + hh.charAt(nn % 16));
  }

  SetPot(ii, jj, kk, cc, llevel)
  {
    this.Upd[ii][jj] = false;
    this.Bridge[ii][jj][kk] = 0;
    if (this.Fld[ii][jj] === -cc) {
      return(0);
    }
    let ll;
    let mm;
    let ddb = 0;
    let nn;
    let oo = 0;
    const dd = 140;
    let bb = 66;
    if (cc !== this.ActiveColor) { bb = 52; }
    this.vv[0] = this.PotVal(ii + 1, jj, kk, cc);
    this.vv[1] = this.PotVal(ii, jj + 1, kk, cc);
    this.vv[2] = this.PotVal(ii - 1, jj + 1, kk, cc);
    this.vv[3] = this.PotVal(ii - 1, jj, kk, cc);
    this.vv[4] = this.PotVal(ii, jj - 1, kk, cc);
    this.vv[5] = this.PotVal(ii + 1, jj - 1, kk, cc);
    for (ll = 0; ll < 6; ll++)
    {
      if ((this.vv[ll] >= 30000) && (this.vv[(ll + 2) % 6] >= 30000))
      {
        if (this.vv[(ll + 1) % 6] < 0) {
          ddb = +32;
        }
        else {
          this.vv[(ll + 1) % 6] += 128;
        } // 512;
      }
    }
    for (ll = 0; ll < 6; ll++)
    {
      if ((this.vv[ll] >= 30000) && (this.vv[(ll + 3) % 6] >= 30000))
      {
        ddb += 30;
      }
    }
    mm = 30000;
    for (ll = 0; ll < 6; ll++)
    { if (this.vv[ll] < 0)
    { this.vv[ll] += 30000;
      this.tt[ll] = 10;
    }
    else { this.tt[ll] = 1; }
      if (mm > this.vv[ll]) { mm = this.vv[ll]; }
    }
    nn = 0;
    for (ll = 0; ll < 6; ll++)
    { if (this.vv[ll] === mm) { nn += this.tt[ll]; }
    }
    if (llevel > 1)
    { this.Bridge[ii][jj][kk] = nn / 5;
      if ((nn >= 2) && (nn < 10)) { this.Bridge[ii][jj][kk] = bb + nn - 2; mm -= 32; }
      if (nn < 2)
      { oo = 30000;
        for (ll = 0; ll < 6; ll++)
        { if ((this.vv[ll] > mm) && (oo > this.vv[ll])) { oo = this.vv[ll]; }
        }
        if (oo <= mm + 104) { this.Bridge[ii][jj][kk] = bb - (oo - mm) / 4; mm -= 64; }
        mm += oo;
        mm /= 2;
      }
    }

    if ((ii > 0) && (ii < this.Size - 1) && (jj > 0) && (jj < this.Size - 1)) { this.Bridge[ii][jj][kk] += ddb; }
    else { this.Bridge[ii][jj][kk] -= 2; }
    if (((ii === 0) || (ii === this.Size - 1)) && ((jj === 0) || (jj === this.Size - 1))) { this.Bridge[ii][jj][kk] /= 2; } // /=4
    if (this.Bridge[ii][jj][kk] > 68) { this.Bridge[ii][jj][kk] = 68; } // 66

    if (this.Fld[ii][jj] === cc)
    { if (mm < this.Pot[ii][jj][kk])
    { this.Pot[ii][jj][kk] = mm;
      this.SetUpd(ii + 1, jj, cc);
      this.SetUpd(ii, jj + 1, cc);
      this.SetUpd(ii - 1, jj + 1, cc);
      this.SetUpd(ii - 1, jj, cc);
      this.SetUpd(ii, jj - 1, cc);
      this.SetUpd(ii + 1, jj - 1, cc);
      return(1);
    }
      return(0);
    }
    if (mm + dd < this.Pot[ii][jj][kk])
    { this.Pot[ii][jj][kk] = mm + dd;
      this.SetUpd(ii + 1, jj, cc);
      this.SetUpd(ii, jj + 1, cc);
      this.SetUpd(ii - 1, jj + 1, cc);
      this.SetUpd(ii - 1, jj, cc);
      this.SetUpd(ii, jj - 1, cc);
      this.SetUpd(ii + 1, jj - 1, cc);
      return(1);
    }
    return(0);
  }

  PotVal(ii, jj, kk, cc)
  { if (ii < 0) { return(30000); }
    if (jj < 0) { return(30000); }
    if (ii >= this.Size) { return(30000); }
    if (jj >= this.Size) { return(30000); }
    if (this.Fld[ii][jj] === 0) { return(this.Pot[ii][jj][kk]); }
    if (this.Fld[ii][jj] === -cc) { return(30000); }
    return(this.Pot[ii][jj][kk] - 30000);
  }

  SetUpd(ii, jj, cc)
  { if (ii < 0) { return; }
    if (jj < 0) { return; }
    if (ii >= this.Size) { return; }
    if (jj >= this.Size) { return; }
    this.Upd[ii][jj] = true;
  }

  SetLevel(nn, mm)
  {
    if (this.IsRunning)
    {
      this.LastEvent = 'SetLevel(' + nn + ',' + mm + ')';
      return;
    }
    this.Level[nn] = mm;
  }

  SetOption(nn, mm)
  {
    if (this.IsRunning)
    {
      this.LastEvent = 'SetOption(' + nn + ',' + mm + ')';
      return;
    }
    if (nn < 2)
    { if (mm === 0) {
      this.IsPlayer[nn] = true;
    }
    else {
      this.IsPlayer[nn] = false;
    }
    }
    else { this.IsStart0 = mm; }
  }

  ShowAI(bb)
  { let ww;
    this.IsAI = bb;
    if (this.IsAI)
    { this.WritePot(true);
      document.getElementById('AI').style.display = 'inline';
      ww = parseInt(String(window.top.innerWidth));
      if (ww < 840) { window.top.resizeBy(840 - ww, 0); }
    }
    else { document.getElementById('AI').style.display = 'none'; }
  }

   Back()
  {
    if (this.IsRunning)
    {
      this.LastEvent = 'Back()';
      return;
    }
    if (this.MoveCount > 0)
    {
      this.IsOver = false;
      this.MoveCount--;
      const ii = History[this.MoveCount][0];
      const jj = History[this.MoveCount][1];
      if ((this.MoveCount === 1) && (this.IsSwap))
      {
        this.Fld[jj][ii] = 0;
        // RefreshPic(jj, ii);
        this.draw();
        this.Fld[ii][jj] = ((this.MoveCount + this.Start0) % 2) * 2 - 1;
        // RefreshPic(ii, jj);
        this.draw();
      }
      else
      {
        this.Fld[ii][jj] = 0;
        // RefreshPic(ii, jj);
        this.draw();
      }
      /*if (MoveCount<10)
          window.document.OptionsForm.Moves.value=" "+eval(MoveCount)+" ";
      else
          window.document.OptionsForm.Moves.value=MoveCount;
      if ((MoveCount+Start0)%2===0) window.document.OptionsForm.Msg.value=" Blue to move.";
      else window.document.OptionsForm.Msg.value=" Red to move.";*/
      this.WritePot(true);
    }
  }

   Replay()
  {
    if (this.IsRunning)
    {
      this.LastEvent = 'Replay()';
      return; }
    if (this.MoveCount < this.MaxMoveCount)
    { const ii = History[this.MoveCount][0];
      const jj = History[this.MoveCount][1];
      if (this.MoveCount < this.MaxMoveCount - 1)
      {
        this.MakeMove(ii, jj, false);
        this.WritePot(true); }
      else { this.MakeMove(ii, jj, true); }
    }
  }

  GetMoveList()
  { let ii;
    let jj;
    let nn;
    let ss = '';
    for (nn = 0; nn < this.MaxMoveCount; nn++)
    { ii = History[nn][0];
      jj = History[nn][1];
      if (nn > 0) { ss += ' '; }
      ss += String.fromCharCode(65 + jj) + eval(ii + 1);
    }
    // window.document.OptionsForm.MoveList.value = ss;
  }

  checkWin(c)
  {
    const open = [];
    const openPrev = [];
    const closed = [];
    const closedPrev = [];
    for (let a = 0; a < 14; a++)
    {
      if (this.Fld[c === 1 ? a : 0][c === 1 ? 0 : a] === c)
      {
        open.length = openPrev.length = closed.length = closedPrev.length = 0;
        let pathFound = false;
        open.push([c === 1 ? a : 0, c === 1 ? 0 : a]);
        openPrev.push(-1);
        while (open.length > 0)
        {
          const u = open[0];
          open.splice(0, 1);
          const uI = openPrev.splice(0, 1);
          closed.push(u);
          closedPrev.push(uI);
          if (u[c === 1 ? 1 : 0] === 13)
          {
            pathFound = true;
            break;
          }
          const connections = this.getConnections(u[0], u[1], c, open, closed);
          for (let i = 0; i < connections.length; i++)
          {
            open.push(connections[i]);
            openPrev.push(closed.length - 1);
          }
        }
        if (pathFound)
        {
          const path = [];
          let u = closed.length - 1;
          while (closedPrev[u] != -1)
          {
            path.push(closed[u]);
            u = closedPrev[u];
            console.log(closedPrev[u]);
          }
          path.push([c === 1 ? a : 0, c === 1 ? 0 : a]);
          path.reverse();
          this.active = false;
          return path;
        }
      }
    }
    return false;
  }


   MakeMove(ii, jj, oo)
  {
    let ccol;
    // const kk;
    const iis = ii;
    const jjs = jj;
    ccol = ((this.MoveCount + 1 + this.Start0) % 2) * 2 - 1;
    this.Fld[iis][jjs] = ccol;
    this.draw();
    if (History[this.MoveCount][0] !== ii)
    { History[this.MoveCount][0] = ii;
      this.MaxMoveCount = this.MoveCount + 1;
    }
    if (History[this.MoveCount][1] !== jj)
    { History[this.MoveCount][1] = jj;
      this.MaxMoveCount = this.MoveCount + 1;
    }
    this.MoveCount++;
    if (this.MaxMoveCount < this.MoveCount) {
      this.MaxMoveCount = this.MoveCount;
    }
    if (! oo) { return; }
    this.GetPot(0);
    this.GetPot(2);
    // ShowPot();
    this.WritePot(true);
    if (ccol < 0)
    { if ((this.Pot[ii][jj][2] > 0) || (this.Pot[ii][jj][3] > 0)) { return; }
      // window.document.OptionsForm.Msg.value=" Red has won !";
      const p1 = this.checkWin(-1);
      this.drawPath(this.ctx, p1);
      // alert("You won!");
      this.Blink(0);
    }
    else
    { if ((this.Pot[ii][jj][0] > 0) || (this.Pot[ii][jj][1] > 0)) { return; }
      // window.document.OptionsForm.Msg.value=" Blue has won !";
      const p0 = this.checkWin(1);
      this.drawPath(this.ctx, p0);
      alert('The blue player won!');
      this.Blink(0);
    }
    this.IsOver = true;
    const data = {
      id: sessionStorage.getItem('userID'),
      tutorialAns: this.tutorialAns,
      q1: this.q1,
      q2: this.q2,
      countBack : this.counterMoveBack,
      whoWin: "red player"
    };
    this.hexService.saveOpQ(data).subscribe(
      response => {
        console.log('here is the response');
        const opAnsDb = response;
        console.log(opAnsDb);
      },
      error => {
        console.log(error);
      });
    //this.router.navigate(['/', 'expiriment']);
    this.moveToEx();
  }


   random(nn)
  { return(Math.floor(Math.random() * 1000) % nn);
  }

  drawPath(c, p)
  {
    c.lineWidth = 10;
    c.beginPath();
    c.moveTo((p[0][0] + p[0][1]) * this.w - (p[0][1] - 4) * (this.w / 2), (p[0][1] + 2) * 1.5 * this.r);
    for (let i = 1; i < p.length; i++) {
      c.lineTo((p[i][0] + p[i][1]) * this.w - (p[i][1] - 4) * (this.w / 2), (p[i][1] + 2) * 1.5 * this.r);
    }
    c.stroke();
  }

  sign(xx)
  { if (xx < 0) { return(-1); }
    if (xx > 0) { return(1); }
    return(0);
  }

  findArr(a, b)
  {
    for (let i = 0; i < a.length; i++) {
      if (JSON.stringify(a[i]) === JSON.stringify(b)) {
        return i;
      }
    }
    return -1;
  }

  getConnections(x, y, c, open, closed)
  {
    const a = [-1, 0, 1, 0, 0, -1, 0, 1, 1, -1, -1, 1];
    const ret = [];
    for (let i = 0; i < 6; i++) {
      if (x + a[i * 2] >= 0  &&  x + a[i * 2] < 14  &&  y + a[i * 2 + 1] >= 0  &&  y + a[i * 2 + 1] < 14) {
        if (this.Fld[x + a[i * 2]][y + a[i * 2 + 1]] === c  &&  this.findArr(open, [x + a[i * 2], y + a[i * 2 + 1]]) === -1  &&  this.findArr(closed, [x + a[i * 2], y + a[i * 2 + 1]]) === -1) {
          ret.push([x + a[i * 2], y + a[i * 2 + 1]]);
        }
      }
    }
    return ret;
  }

  GetBestMove(theCol, theLevel)
  {
    let ff = 0;
    let kk;
    let ii_b;
    let jj_b;
    let ii_q = 0;
    let jj_q = 0;
    let cc;
    let pp0;
    let pp1;
    let mmp;
    const vv = new Array();
    if (this.MoveCount > 0) { ff = 190 / (this.MoveCount * this.MoveCount); }
    let mm = 20000;
    for (let ii = 0; ii < this.Size; ii++)
    { for (let jj = 0; jj < this.Size; jj++)
    { if (this.Fld[ii][jj] !== 0)
    { ii_q += 2 * ii + 1 - this.Size;
      jj_q += 2 * jj + 1 - this.Size;
    }
    }
    }
    ii_q = this.sign(ii_q);
    jj_q = this.sign(jj_q);
    for (let ii = 0; ii < this.Size; ii++)
    { for (let jj = 0; jj < this.Size; jj++)
    { if (this.Fld[ii][jj] === 0)
    { mmp = Math.random() * (49 - theLevel * 16);
      mmp += (Math.abs(ii - 5) + Math.abs(jj - 5)) * ff;
      mmp += 8 * (ii_q * (ii - 5) + jj_q * (jj - 5)) / (this.MoveCount + 1);
      if (theLevel > 2)
      { for (kk = 0; kk < 4; kk++) {
        mmp -= this.Bridge[ii][jj][kk];
      }
      }
      pp0 = this.Pot[ii][jj][0] + this.Pot[ii][jj][1];
      pp1 = this.Pot[ii][jj][2] + this.Pot[ii][jj][3];
      mmp += pp0 + pp1;
      if ((pp0 <= 268) || (pp1 <= 268)) { mmp -= 400; } // 140+128
      vv[ii * this.Size + jj] = mmp;
      if (mmp < mm)
      { mm = mmp;
        ii_b = ii;
        jj_b = jj;
      }
    }
    }
    }
    if (theLevel > 2)
    { mm += 108;
      for (let ii = 0; ii < this.Size; ii++)
      { for (let jj = 0; jj < this.Size; jj++)
      { if (vv[ii * this.Size + jj] < mm)
      { if (theCol < 0)// red
      { if ((ii > 3) && (ii < this.Size - 1) && (jj > 0) && (jj < 3))
      { if (this.Fld[ii - 1][jj + 2] === -theCol)
      { cc = this.CanConnectFarBorder(ii - 1, jj + 2, -theCol);
        if (cc < 2)
        { ii_b = ii;
          if (cc < -1) { ii_b--; cc++; }
          jj_b = jj - cc;
          mm = vv[ii * this.Size + jj];
        }
      }
      }
        if ((ii > 0) && (ii < this.Size - 1) && (jj === 0))
        { if ((this.Fld[ii - 1][jj + 2] === -theCol) &&
          (this.Fld[ii - 1][jj] === 0) && (this.Fld[ii - 1][jj + 1] === 0) && (this.Fld[ii][jj + 1] === 0) && (this.Fld[ii + 1][jj] === 0))
        { ii_b = ii; jj_b = jj; mm = vv[ii * this.Size + jj]; }
        }
        if ((ii > 0) && (ii < this.Size - 4) && (jj < this.Size - 1) && (jj > this.Size - 4))
        { if (this.Fld[ii + 1][jj - 2] === -theCol)
        { cc = this.CanConnectFarBorder(ii + 1, jj - 2, -theCol);
          if (cc < 2)
          { ii_b = ii;
            if (cc < -1) { ii_b++; cc++; }
            jj_b = jj + cc;
            mm = vv[ii * this.Size + jj];
          }
        }
        }
        if ((ii > 0) && (ii < this.Size - 1) && (jj === this.Size - 1))
        { if ((this.Fld[ii + 1][jj - 2] === -theCol) &&
          (this.Fld[ii + 1][jj] === 0) && (this.Fld[ii + 1][jj - 1] === 0) && (this.Fld[ii][jj - 1] === 0) && (this.Fld[ii - 1][jj] === 0))
        { ii_b = ii; jj_b = jj; mm = vv[ii * this.Size + jj]; }
        }
      }
      else
      { if ((jj > 3) && (jj < this.Size - 1) && (ii > 0) && (ii < 3))
      { if (this.Fld[ii + 2][jj - 1] === -theCol)
      { cc = this.CanConnectFarBorder(ii + 2, jj - 1, -theCol);
        if (cc < 2)
        { jj_b = jj;
          if (cc < -1) { jj_b--; cc++; }
          ii_b = ii - cc;
          mm = vv[ii * this.Size + jj];
        }
      }
      }
        if ((jj > 0) && (jj < this.Size - 1) && (ii === 0))
        { if ((this.Fld[ii + 2][jj - 1] === -theCol) &&
          (this.Fld[ii][jj - 1] === 0) && (this.Fld[ii + 1][jj - 1] === 0) && (this.Fld[ii + 1][jj] === 0) && (this.Fld[ii][jj + 1] === 0))
        { ii_b = ii; jj_b = jj; mm = vv[ii * this.Size + jj]; }
        }
        if ((jj > 0) && (jj < this.Size - 4) && (ii < this.Size - 1) && (ii > this.Size - 4))
        { if (this.Fld[ii - 2][jj + 1] === -theCol)
        { cc = this.CanConnectFarBorder(ii - 2, jj + 1, -theCol);
          if (cc < 2)
          { jj_b = jj;
            if (cc < -1) { jj_b++; cc++; }
            ii_b = ii + cc;
            mm = vv[ii * this.Size + jj];
          }
        }
        }
        if ((jj > 0) && (jj < this.Size - 1) && (ii === this.Size - 1))
        { if ((this.Fld[ii - 2][jj + 1] === -theCol) &&
          (this.Fld[ii][jj + 1] === 0) && (this.Fld[ii - 1][jj + 1] === 0) && (this.Fld[ii - 1][jj] === 0) && (this.Fld[ii][jj - 1] === 0))
        { ii_b = ii; jj_b = jj; mm = vv[ii * this.Size + jj]; }
        }
      }
      }
      }
      }
    }
    this.MakeMove(ii_b, jj_b, false);
    this.IsRunning = false;
    if (theCol < 0)
    { if ((this.Pot[ii_b][jj_b][2] > 140) || (this.Pot[ii_b][jj_b][3] > 140)) { this.WritePot(false); return; }
      // window.document.OptionsForm.Msg.value=" Red has won !";
      const p1 = this.checkWin(-1);
      this.drawPath(this.ctx, p1);
      // alert("You won!");
      this.Blink(-2);
    }
    else
    { if ((this.Pot[ii_b][jj_b][0] > 140) || (this.Pot[ii_b][jj_b][1] > 140)) { this.WritePot(false); return; }
      // window.document.OptionsForm.Msg.value=" Blue has won !";
      const p0 = this.checkWin(1);
      this.drawPath(this.ctx, p0);
      // alert("The blue player on!");
      this.Blink(-2);
    }
    console.log("red is the winner");
    this.IsOver = true;
    const data = {
      id: sessionStorage.getItem('userID'),
      tutorialAns: this.tutorialAns,
      q1: this.q1,
      q2: this.q2,
      countBack : this.counterMoveBack,
      whoWin: "blue player"
    };
    this.hexService.saveOpQ(data).subscribe(
      response => {
        console.log('here is the response');
        const opAnsDb = response;
        console.log(opAnsDb);
      },
      error => {
        console.log(error);
      });
    this.moveToEx();
    //this.router.navigate(['/', 'expiriment']);
  }

  moveToEx(){
    setTimeout(() => {
      this.router.navigate(['/expiriment']);
    }, 900);
  }

  CanConnectFarBorder(nn, mm, cc)
  { let ii;
    let jj;
    if (cc > 0) // blue
    { if (2 * mm < this.Size - 1)
    { for (ii = 0; ii < this.Size; ii++)
    { for (jj = 0; jj < mm; jj++)
    { if ((jj - ii < mm - nn) && (ii + jj <= nn + mm) && (this.Fld[ii][jj] !== 0)) { return(2); }
    }
    }
      if (this.Fld[nn - 1][mm] === -cc) { return(0); }
      if (this.Fld[nn - 1][mm - 1] === -cc)
      { if (this.GetFld(nn + 2, mm - 1) === -cc) { return(0); }
        return(-1);
      }
      if (this.GetFld(nn + 2, mm - 1) === -cc) { return(-2); }
    }
    else
    { for (ii = 0; ii < this.Size; ii++)
    { for (jj = this.Size - 1; jj > mm; jj--)
    { if ((jj - ii > mm - nn) && (ii + jj >= nn + mm) && (this.Fld[ii][jj] !== 0)) { return(2); }
    }
    }
      if (this.Fld[nn + 1][mm] === -cc) { return(0); }
      if (this.Fld[nn + 1][mm + 1] === -cc)
      { if (this.GetFld(nn - 2, mm + 1) === -cc) { return(0); }
        return(-1);
      }
      if (this.GetFld(nn - 2, mm + 1) === -cc) { return(-2); }
    }
    }
    else
    { if (2 * nn < this.Size - 1)
    { for (jj = 0; jj < this.Size; jj++)
    { for (ii = 0; ii < nn; ii++)
    { if ((ii - jj < nn - mm) && (ii + jj <= nn + mm) && (this.Fld[ii][jj] !== 0)) { return(2); }
    }
    }
      if (this.Fld[nn][mm - 1] === -cc) { return(0); }
      if (this.Fld[nn - 1][mm - 1] === -cc)
      { if (this.GetFld(nn - 1, mm + 2) === -cc) { return(0); }
        return(-1);
      }
      if (this.GetFld(nn - 1, mm + 2) === -cc) { return(-2); }
    }
    else
    { for (jj = 0; jj < this.Size; jj++)
    { for (ii = this.Size - 1; ii > nn; ii--)
    { if ((ii - jj > nn - mm) && (ii + jj >= nn + mm) && (this.Fld[ii][jj] !== 0)) { return(2); }
    }
    }
      if (this.Fld[nn][mm + 1] === -cc) { return(0); }
      if (this.Fld[nn + 1][mm + 1] === -cc)
      { if (this.GetFld(nn + 1, mm - 2) === -cc) { return(0); }
        return(-1);
      }
      if (this.GetFld(nn + 1, mm - 2) === -cc) { return(-2); }
    }
    }
    return(1);
  }

  GetFld(ii, jj)
  { if (ii < 0) { return(-1); }
    if (jj < 0) { return(1); }
    if (ii >= this.Size) { return(-1); }
    if (jj >= this.Size) { return(1); }
    return(this.Fld[ii][jj]);
  }

  Blink(nn)
  { this.IsRunning = true;
    if (nn === -2)
    { setTimeout('Blink(-1)', 10);
      return;
    }
    if (nn === -1)
    { this.GetPot(0);
      this.WritePot(false);
      setTimeout('Blink(0)', 10);
      return;
    }
    if (nn === 14)
    { this.IsRunning = false;
      return;
    }
    let ii;
    let jj;
    const cc = (nn % 2) * (((this.MoveCount + this.Start0) % 2) * 2 - 1);
    for (ii = 0; ii < this.Size; ii++)
    { for (jj = 0; jj < this.Size; jj++)
    { if ((this.Pot[ii][jj][0] + this.Pot[ii][jj][1] <= 0) || (this.Pot[ii][jj][2] + this.Pot[ii][jj][3] <= 0))
    { this.Fld[ii][jj] = cc;
      // this.RefreshPic(ii, jj);
    }
    }
    }
    setTimeout('Blink(' + eval(nn + 1) + ')', 200);
  }

  Clicked(ii, jj)
  {
    if (this.IsOver) {
      return;
    }
    if (this.IsRunning)
    {
      this.LastEvent = 'Clicked(' + ii + ',' + jj + ')';
      return;
    }
    if (this.Fld[ii][jj] !== 0)
    {
      /*if ((MoveCount==1)&&(window.document.OptionsForm.Swap.checked))
          MakeMove(ii,jj,false);*/
      return;
    }
    if (! this.IsPlayer[(this.MoveCount + this.Start0 + 1) % 2]) {
      return;
    }
    if (this.MoveCount === 6)
    {
      this.modalService.open('custom-modal-1');

    }
    if (this.MoveCount === 28)
    {
      this.modalService.open('custom-modal-2');

    }

    this.MakeMove(ii, jj, true);

  }

  Resize()
  { if (navigator.appName === 'Netscape') { history.go(0); }
  }

  Timer()
  {
    // if (this.LastEvent !== '')
    // {
    //   eval(this.LastEvent);
    //   this.LastEvent = '';
    //   return;
    // }
    if (this.IsOver) {
      return;
    }
    if (this.IsRunning) {
      return;
    }
    if (this.IsPlayer[(this.MoveCount + this.Start0 + 1) % 2])
    {
      this.WritePot(true);
      return;
    }
    this.IsRunning = true;
    const ll = this.Level[(this.MoveCount + this.Start0 + 1) % 2];
    // if (SwapTest()) return;
    this.GetPot(ll);
    window.setTimeout(() => this.GetBestMove(((this.MoveCount + 1 + this.Start0) % 2) * 2 - 1  , ll) , 10);
  }



}
