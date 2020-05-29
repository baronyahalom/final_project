import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HexServiceService } from 'src/app/services/hex-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demograph',
  templateUrl: './demograph.component.html',
  styleUrls: ['./demograph.component.css']
})
export class DemographComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private hexService: HexServiceService , private router: Router) { }
  unamePattern = '[0-9]+';

  ngOnInit() {
    const clicks = sessionStorage.getItem('clickConsent');
    if (clicks !== 'True')
    {
      this.router.navigate(['/', 'notFound']);
    }
    this.registerForm = this.formBuilder.group({
      workerID: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(this.unamePattern), Validators.min(18),
        Validators.max(90)]],
      gender: ['', Validators.required],
      hand: ['', Validators.required],
      education: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const data = {
      workerID: this.registerForm.get('workerID').value,
      age: this.registerForm.get('age').value,
      gender: this.registerForm.get('gender').value,
      hand: this.registerForm.get('hand').value,
      education: this.registerForm.get('education').value
    }

    this.hexService.create(data).subscribe(
      response => {
        console.log('here is the response');
        const userDBID = response;
        console.log(userDBID);
        this.navigatesss(userDBID);
      },
      error => {
        console.log(error);
      });



    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

 navigatesss(userDBID){
   sessionStorage.setItem('userID', userDBID);
   sessionStorage.removeItem('clickConsent');
   sessionStorage.setItem('clickTutorial', 'True');
   this.router.navigate(['/', 'tutorial']);
  }

}
