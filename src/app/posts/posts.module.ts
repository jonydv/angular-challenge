import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PostListComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
