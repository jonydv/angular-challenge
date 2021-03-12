import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { User } from '../../../users/interfaces/users.interface';
import { Post } from '../../../posts/interfaces/posts.interface';
import { Album } from '../../../albums/interfaces/albums.interface';
import { Todo } from '../../../todos/interfaces/todos.interface';
import { TodosService } from '../../../todos/services/todos.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()users!: User[];
  @Input()posts!: Post[];
  @Input()albums!: Album[];
  @Input()todos!: Todo[];

  usersTableHeads: string[]= ['Id', 'Nombre', 'Username', 'Ver'];
  postsTableHeads: string[]= ['Id', 'UserId', 'Title', 'Ver'];
  albumsTableHeads: string[]= ['Id', 'UserId', 'Title', 'Ver'];
  todosTableHeads: string[]= ['Id', 'UserId', 'Title', 'Completado', 'Cambiar'];


  constructor(private TodosService: TodosService) { }


  ngOnInit(): void {
  }

  updateTodo(t: Todo):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Se actualizara el estado del todo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.TodosService.updateTodoById(t)
        .subscribe(result => {});
        Swal.fire(
          'Actualizado!',
          'Se actualizo el todo exitosamente',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        t.completed = !t.completed;
        Swal.fire(
          'Cancelado',
          'El todo volvio a su estado original',
          'error'
        )
      }
    })

  }

}
