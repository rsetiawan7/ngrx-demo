import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromDashboard } from './store/reducers';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/components/todo/models';
import { DashboardSelector } from './store/selectors';
import { DashboardAction } from './store/actions';
import { LoginSelector } from '../login/store/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  todo: FormControl = new FormControl('');
  todos$: Observable<Array<Todo>>;
  username$: Observable<string>;

  constructor(
    private store: Store<fromDashboard.TodoState>
  ) { }

  ngOnInit(): void {
    this.todos$ = this.store.select(DashboardSelector.selectAll);
    this.username$ = this.store.select(LoginSelector.getUsername);
  }

  addTodo(): void {
    if (this.todo.value) {
      this.store.dispatch(DashboardAction.addTodo({ todo: this.todo.value }));
      this.todo.reset();
    }
  }

  deleteTodo(todoId: number): void {
    this.store.dispatch(DashboardAction.removeTodo({ todoId }));
  }
}
