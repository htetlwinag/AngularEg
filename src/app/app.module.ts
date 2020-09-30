import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { LoopComponent } from './loop/loop.component';
import { ForloopComponent } from './forloop/forloop.component';
import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DemoComponent,
    IndexComponent,
    AboutComponent,
    LoopComponent,
    ForloopComponent,
    Index1Component,
    Index2Component,
    LoginComponent,
    DashboardComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
