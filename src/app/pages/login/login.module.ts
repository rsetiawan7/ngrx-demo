import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginNgrxModule } from './store/login-ngrx.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    LoginNgrxModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ]
})
export class LoginModule { }
