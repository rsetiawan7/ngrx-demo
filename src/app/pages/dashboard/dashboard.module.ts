import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TodoModule } from 'src/app/components/todo/todo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardNgrxModule } from './store/dashboard-ngrx/dashboard-ngrx.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    DashboardNgrxModule
  ]
})
export class DashboardModule { }
