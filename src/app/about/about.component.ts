import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  
  <input [(ngModel)]="name" type="text"> {{name}}
  
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name="";
  constructor() { }

  ngOnInit(): void {
  }

}
