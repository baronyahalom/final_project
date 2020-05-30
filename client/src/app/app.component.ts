  // this is the main heart of our component.
import { Component } from '@angular/core';


   // the component decorator and has the location
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hex-with-server';
}
