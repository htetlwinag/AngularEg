import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  template: `
  <div *ngIf="displayName; then thenBlock;else elseBlock"></div>

 <ng-template #thenBlock>
   <h2>CodeExample</h2>
 </ng-template>

  <ng-template #elseBlock>
    <h2>
      Name is Hidden
    </h2>
  </ng-template>

  <div [ngSwitch]=color>
    <div *ngSwitchCase="'red'"> RED </div>
    <div *ngSwitchCase="'blue'"> BLUE </div>
    <div *ngSwitchCase="'green'"> GREEN </div>

  </div>

  `,
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  public color = "blue";
  displayName = true  ;
  constructor() { }

  ngOnInit(): void {
  }

}
