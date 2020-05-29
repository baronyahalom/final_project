import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  isAgreed = false;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  toDemography() {
    sessionStorage.setItem('clickConsent', 'True');
  }



}
