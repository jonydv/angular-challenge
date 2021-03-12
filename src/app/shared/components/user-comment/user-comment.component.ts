import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../posts/interfaces/posts.interface';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styles: [
  ]
})
export class UserCommentComponent implements OnInit {

  @Input() comments!: Comment[];
  constructor() { }

  ngOnInit(): void {
  }

}
