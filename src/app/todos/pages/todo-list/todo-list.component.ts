import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Todo } from '../../interfaces/todos.interface';
import { TodosService } from '../../services/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  tableHeads: string[]= ['Id', 'UserId', 'Title', 'Hecho', 'Ver'];
  todos: Todo[] = [];
  completedFilter: boolean = false;
  order: boolean = false;

  constructor(private todosService: TodosService) { }

 

  ngOnInit(): void {
    this.todosService.getTodos(1)
      .subscribe(todos => this.todos = todos);
  }

  updateTodo():void{

    Swal.fire({
      title: 'Estas seguro?',
      text: 'No podrás recuperar la imgen borrada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
      
       
        Swal.fire(
          'Imagen borrada!',
          'Se borro exitosamente',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu imagen esta a salvo!',
          'error'
        )
      }
    })
  }

  filterTodosByState():void{
    this.completedFilter= !this.completedFilter;
    this.todosService.getTodosFiltered(1, this.completedFilter)
    .subscribe(todos => this.todos = todos);
  }

  filterTodosById():void{
    this.order = !this.order;
    let filter: string = this.order ? 'asc' : 'desc';
    this.completedFilter= !this.completedFilter;
    this.todosService.getTodosFilteredById(1, filter)
    .subscribe(todos => this.todos = todos);
  }


}
