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
  page: number = 1;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts(this.page)
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

  paginationPost(page: number): void{
    if(this.page === 1 && page === -1 || this.page === 5 && page=== 1){
      return;
    }
    this.page= this.page + page;
    this.postsService.getPosts(this.page)
      .subscribe(posts => this.posts = posts);
  }
}
