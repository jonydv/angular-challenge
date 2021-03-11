import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/posts.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post!: Post;
  showUser: boolean = false;
  showComments: boolean = false;
  constructor(private postsService: PostsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.postsService.getPostUserAndComments(id))
      )
      .subscribe(post => this.post = post);
  }

  setShowUser():void{
    this.showUser = !this.showUser;
    console.log(this.showUser)
  }

  setShowComments(): void{
    this.showComments=!this.showComments;
  }

}
