import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todos.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  tableHeads: string[]= ['Id', 'UserId', 'Title', 'Hecho', 'Ver'];
  todos: Todo[] = []

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos(1)
      .subscribe(todos => this.todos = todos);
  }

}
