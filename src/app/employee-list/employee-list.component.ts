import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2 class="text-warning">Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>

  </ul>

  <h2 class="text-warning">Employee Details</h2>
  <ul *ngFor="let employeed of employeesDetails">
    <li>{{employeed.id}}.{{employeed.name}} - {{employeed.age}}</li>

  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees=[
    {"id" : 1, "name" : "Mg Aung", "age" : 28},
    {"id" : 2, "name" : "Mg Mg", "age" : 22},
    {"id" : 3, "name" : "Mg Oo", "age" : 21}

  ];

  public employeesDetails=[
    {"id" : 1, "name" : "Mg Aung", "age" : 28},
    {"id" : 2, "name" : "Mg Mg", "age" : 22},
    {"id" : 3, "name" : "Mg Oo", "age" : 21}

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
