import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromLogin } from './store/reducers';
import { LoginAction } from './store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private store: Store<fromLogin.LoginState>
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username.value && this.password.value) {
      this.store.dispatch(LoginAction.Request(this.username.value, this.password.value));
    }
  }

}
