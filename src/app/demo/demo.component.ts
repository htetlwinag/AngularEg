import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  
  <input [id]="myId" type="text" value= "HTun">
  <input [disabled]="false" id="{{myId}}" type="text" value= "Ma">

  `,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public myId = "testId";
  constructor() { }

  ngOnInit(): void {
  }

}
