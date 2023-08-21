import { Component, OnInit } from '@angular/core';
declare var customFunction: any; // Declare the function from JavaScript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testJsInTs';
  ngOnInit(): void {
    // Call the custom JavaScript function
    if (typeof customFunction === 'function') {
      customFunction();
    } else {
      console.log("customFunction is not defined");
    }
  }
}
