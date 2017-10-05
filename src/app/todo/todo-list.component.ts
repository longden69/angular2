import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  providers: [ TodoService ]
})

export class TodoListComponent implements OnInit {
  todoAddVisible = false;
  todoList = '';
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getData().subscribe(
      (result) => {
        this.todoList = result;
      }
    );
  }

  onDelete(id: number) {
    this.todoService.delete(id).subscribe(
      (result) => {
        alert('Delete success !')
        this.ngOnInit();
      }
    );
  }
}
