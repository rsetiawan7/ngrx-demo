import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TodoModule } from 'src/app/components/todo/todo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
