import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../users/interfaces/users.interface';
import { Post } from '../../../posts/interfaces/posts.interface';
import { Album } from '../../../albums/interfaces/albums.interface';
import { Todo } from '../../../todos/interfaces/todos.interface';


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
  todosTableHeads: string[]= ['Id', 'UserId', 'Title', 'Hecho', 'Ver'];


  constructor() { }


  ngOnInit(): void {
  }

}
