import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  todo: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    // TODO: Tambah action di sini.
  }
}
