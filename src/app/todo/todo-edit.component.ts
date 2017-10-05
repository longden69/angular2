import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  providers: [TodoService]
})

export class TodoEditComponent implements OnInit {
  id: number;
  todo: any;
  constructor(
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  onUpdate() {
    this.todoService.update(this.id, this.todo).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/todo-list']);
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    )
    this.todoService.getTodoById(this.id).subscribe(
      (result) => {
        this.todo = result;
      }
    );
  }
}
