import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
  
     <button (click)= "onClick($event)" >Greet</button>{{greeting}}
     <button (click)= "greeting='welcome tutu'" >Greet</button>{{greeting}}
     <input #input type="text">
     <button (click)="logMessage(input.value)">Log</button>
  `,
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public greeting ="";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }
  logMessage(value){
    console.log(value);
  }
}
