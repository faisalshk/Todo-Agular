import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todo: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('todo');
    if (this.localItem === null) {
      this.todo = [];
    } else {
      this.todo = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}
  todoDelete(todo: Todo) {
    console.log(todo);
    let index = this.todo.indexOf(todo);
    this.todo.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
  todoadd(todo: Todo) {
    console.log(todo);
    this.todo.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
  toggleTodo(todo: Todo) {
    let index = this.todo.indexOf(todo);
    this.todo[index].active = !this.todo[index].active;
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}
