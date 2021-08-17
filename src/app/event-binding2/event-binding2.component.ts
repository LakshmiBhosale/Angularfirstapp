import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnEventClick(myevent:any){
    console.log(myevent);
    console.log("value of button is"+ myevent.target.value);
  }

  onTemplate(input:any){
    console.log(input);
    console.log(input.value);
  }

  onTemplate1(myvalue:any){
    // console.log ("My Name is ::" + myvalue);
    alert ("My Name is ::" + myvalue);
  }
}
