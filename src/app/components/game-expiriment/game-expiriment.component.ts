import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HexServiceService} from '../../services/hex-service.service';


@Component({
  selector: 'app-game-expiriment',
  templateUrl: './game-expiriment.component.html',
  styleUrls: ['./game-expiriment.component.css']
})
export class GameExpirimentComponent implements OnInit {
  questionForm1: FormGroup;
  questionForm2: FormGroup;
  questionForm3: FormGroup;
  next1 = false;
  next2 = false;
  finish = false;
  part1 = true;
  options: string[] ;
  unamePattern = '[0-9]+';
  changeANS1 = false;

  constructor(public formBuilder: FormBuilder, private router: Router, private hexService: HexServiceService) {

  }

  ngOnInit(): void {
    const isClickGame = sessionStorage.getItem('clickGame');
    if (isClickGame === null){
    sessionStorage.setItem('clickGame', '0');
    }
    const isUser = sessionStorage.getItem('userID');
    if (isUser == null){
      this.router.navigate(['/', 'notFound']);
    }
    else{
      this.isItUserFromDB(isUser);
    }
    this.options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    this.questionForm1 = this.formBuilder.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(0),
        Validators.max(100)]],
      A: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(0),
        Validators.max(100)]],
      B: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(0),
        Validators.max(100)]],
      C: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(0),
        Validators.max(100)]],
      D: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(0),
        Validators.max(100)]],
      E: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(0),
        Validators.max(100)]],
      q6: ['', Validators.required]
    }, {validators: this.checkSum});
  }

  isItUserFromDB(userID){
    this.hexService.get(userID)
      .subscribe(
        data => {
          console.log(data);
          console.log(true);
        },
        error => {
          console.log(error);
          this.router.navigate(['/', 'pageNotFound']);
        });
  }

  checkSum(group: FormGroup) {
    if (!group.valid && !group.hasError('notValid')) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    let sum: number;
    const a = +group.get('A').value;
    const b = +group.get('B').value;
    const c = +group.get('C').value;
    const d = +group.get('D').value;
    const e = +group.get('E').value;
    sum = a + b + c + d + e;
    if (sum < 100){
      return {notValid: true};
    }
    else if (sum > 100){
      return {notValid2: true};
    }
    else {
      return null;
    }
  }

  get f1() { return this.questionForm1.controls; }
  get f2() { return this.questionForm2.controls; }
  get f3() { return this.questionForm3.controls; }

  changAns1(isIT: boolean){
    if (isIT === true){
      this.changeANS1 = true;
    }
    else{
      this.f1.q6.setValue('');
      this.changeANS1 = false;
    }
  }

  playGame(){
    let counter = parseInt(sessionStorage.getItem('clickGame'));
    counter = counter + 1;
    sessionStorage.removeItem('clickGame');
    sessionStorage.setItem('clickGame', String(counter));
    sessionStorage.setItem('isPlay', 'True');
    this.router.navigate(['/', 'hexGame']);
  }

  onNext1() {
    this.next1 = true;
    if (this.f1.q1.errors || this.f1.q2.errors || this.f1.q3.errors || this.f1.q4.errors || this.f1.q5.errors
      || this.f1.A.errors || this.f1.B.errors || this.questionForm1.hasError('notValid2')
      || this.f1.C.errors || this.f1.D.errors || this.f1.E.errors || (this.f1.q6.errors && this.changeANS1) || this.questionForm1.hasError('notValid')){
      console.log('yes');
    }
    else{
      const data = {
        id: sessionStorage.getItem('userID'),
        q1: this.f1.q1.value,
        q2: this.f1.q2.value,
        q3: this.f1.q3.value,
        q4: this.f1.q4.value,
        q5: this.f1.q5.value,
        A: this.f1.A.value,
        B: this.f1.B.value,
        C: this.f1.C.value,
        D: this.f1.D.value,
        E: this.f1.E.value,
        q6: this.f1.q6.value,
        numOfTrying: sessionStorage.getItem('clickGame')
      };
      this.hexService.savepart1(data).subscribe(
        response => {
          console.log('here is the response');
          const part1AnsDb = response;
          console.log(part1AnsDb);
        },
        error => {
          console.log(error);
        });
    }
    /*this.wrongAns1 = false;
    this.wrongAns2 = false;
    console.log(this.questionForm.get('q1').value)
    if (this.questionForm.get('q1').value === 'red' && this.questionForm.get('q2').value === 'no2') {
      this.submitted = true;
      this.navigatesss();
    }
    else {
      if (this.questionForm.get('q1').value != 'red') {
        this.wrongAns1 = true;
        console.log("the 1:" + this.wrongAns1);
        console.log("ffffff::::");
        console.log(this.submitted);
      }
      if (this.questionForm.get('q2').value != 'no2') {
        this.wrongAns2 = true;
        console.log("the 2:" + this.wrongAns2);
      }
      return;
    }*/
  }

  navigatesss(){
    //this.showPage = true;
  }

  readyFor(){
    /*this.continue = true;
    if (this.familiarity.get('howFamiliar').value === '')
    {
      document.getElementById('aaa').scrollIntoView();
      return;
    }
    sessionStorage.setItem('tutorialAns' , this.familiarity.get('howFamiliar').value)
    sessionStorage.setItem('isPlay', 'True');
    sessionStorage.removeItem('clickTutorial');
    this.router.navigate(['/', 'hexGame']);*/
  }

}
