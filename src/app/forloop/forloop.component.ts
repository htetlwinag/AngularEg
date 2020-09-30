import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  template: `
  
  <div *ngFor="let color of colors; odd as l">
    <h2>{{l}} {{color}}</h2>
   
 </div>
  
  `,
  styles: []
})
export class ForloopComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
