import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',

template: `
<h2>
  Welcome{{name}}
</h2>
<h2 class="text-success">Mi </h2>
<h2 [class]="successClass">Mi  Gyi</h2>
<h2 class="text-special" [class]="successClass">Mi  lay</h2>

<h2 [class.text-danger]="hasError">Mi  Gyi</h2>

<h2 [ngClass]="messageClass">OMG</h2>

<h1 [style.color]="hasError ?  'red' : 'green' ">Style Blinding</h1>

<h2 [style.color]="hcolor">Style Blinding 2</h2>
<h2 [ngStyle]="CoStyle">Style Blinding 3</h2>
` ,

  styles: [`

    .text-success {
      color : green;
    }
    .text-danger {
      color : red;
    }
    .text-special {
      font-style : italic;
    }

  `]
})
export class TestComponent implements OnInit {

  public CoStyle ={

    "color" : "purple",
    "fontStyle" : "italic"

  };
  public hcolor = "blue";
  public name = "ko ko";
  public hasError = false;
  public successClass = "text-success";

  public isspecial = true;

  public messageClass = {

    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isspecial

  };

  constructor() { }

  


  ngOnInit(): void {
  }

}
