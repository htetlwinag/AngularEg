import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-index1',
  template: `

<h2>{{"Hello " + name}}</h2>
<button (click)="fireEvent()">Send Event</button>

  `,
  styles: []
})
export class Index1Component implements OnInit {

  @Input('parentData') name ;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }

}
