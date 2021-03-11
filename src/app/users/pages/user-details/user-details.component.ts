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
         
  }

}
