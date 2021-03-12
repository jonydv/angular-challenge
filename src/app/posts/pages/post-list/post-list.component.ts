import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  tableHeads: string[]= ['Id', 'UserId', 'Title', 'Ver'];
  title: string = '';
  userId!: number;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts(1)
      .subscribe(posts => this.posts = posts);
  }

  filterByTitle(): void{

    this.postsService.getPostsFiltered(1, this.title)
      .subscribe(posts => this.posts = posts);
  }

  filterByUserId(): void{
    if(!this.userId){
      return;
    }
    
    this.postsService.getPostsByUserId(this.userId)
      .subscribe(posts => this.posts = posts);

  }
}
