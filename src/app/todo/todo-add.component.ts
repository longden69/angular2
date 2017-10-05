import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html'
})

export class TodoAddComponent implements OnInit {
  @Output() reload: EventEmitter<any> = new EventEmitter();
  todo: any;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todo = {};
  }

  onAddTodo() {
    this.todoService.add(this.todo).subscribe(
      (result) => {
        alert('add todo success !');
        this.reload.emit(null);
      }
    );
  }
}
