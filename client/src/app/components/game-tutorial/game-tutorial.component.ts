import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HexServiceService} from '../../services/hex-service.service';

@Component({
  selector: 'app-game-tutorial',
  templateUrl: './game-tutorial.component.html',
  styleUrls: ['./game-tutorial.component.css']
})
export class GameTutorialComponent implements OnInit {
  questionForm: FormGroup;
  familiarity: FormGroup;
  submitted = false;
  continue = false;
  wrongAns1 = false;
  wrongAns2 = false;
  showPage = false;
  constructor(public formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    const isUser = sessionStorage.getItem('userID');
    if (isUser == null){
      this.router.navigate(['/', 'notFound']);
    }
    const clicks = sessionStorage.getItem('clickTutorial');
    if (clicks !== 'True')
    {
      this.router.navigate(['/', 'notFound']);
    }
    console.log(isUser);
    this.questionForm = this.formBuilder.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required]
    });

    this.familiarity = this.formBuilder.group({
      howFamiliar: ['', Validators.required]
    });
  }

  get f() { return this.questionForm.controls; }
  get f2() { return this.familiarity.controls; }

  onSubmit() {
    this.submitted = true;
    this.wrongAns1 = false;
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
    }
  }

  navigatesss(){
    this.showPage = true;
  }

  readyFor(){
    this.continue = true;
    if (this.familiarity.get('howFamiliar').value === '')
    {
      document.getElementById('aaa').scrollIntoView();
      return;
    }
    sessionStorage.setItem('tutorialAns' , this.familiarity.get('howFamiliar').value)
    sessionStorage.setItem('isPlay', 'True');
    sessionStorage.removeItem('clickTutorial');
    this.router.navigate(['/', 'hexGame']);
  }


}
