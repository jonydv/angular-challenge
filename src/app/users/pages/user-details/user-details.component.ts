import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { Post } from '../../../posts/interfaces/posts.interface';
import { Album } from '../../../albums/interfaces/albums.interface';
import { Todo } from '../../../todos/interfaces/todos.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  @Input()user!: User;
  posts!: Post[];
  albums!: Album[];
  todos!:Todo[];
  showPosts: boolean = false;
  showAlbums: boolean = false;
  showTodos: boolean = false;

  tableHeads: string[]= ['Id', 'UserId', 'Title', 'Ver'];

  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.usersService.getUsersById(id))
      )
      .subscribe(user => this.user = user);
  }

  goBack(){
    this.router.navigate(['/']);
  }

  getAllUserPosts (id: string):void{
    
   this.usersService.getUserPosts(id)
      .subscribe(posts => this.posts = posts);
    
      this.showPosts= !this.showPosts;
  }

  getAllUserAlbums (id: string):void{
    
    this.usersService.getUserAlbums(id)
       .subscribe(albums => this.albums = albums);
    
       this.showAlbums= !this.showAlbums;
          
   }

   getAllUserTodos(id: string):void{
    
    this.usersService.getUserTodos(id)
       .subscribe(todos => this.todos = todos);
          
       this.showTodos= !this.showTodos;
   }

}
