import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  // Using Input decorator to accept the value from another component
  @Input() todo: Todo;
  @Input() i: number;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  //handling click event
  onClick(todo: Todo) {
    this.deleteTodo.emit(todo);
    console.log('Delete button Triggered!!');
  }
  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}
