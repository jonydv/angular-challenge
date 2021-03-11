import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostListComponent } from './pages/post-list/post-list.component';

const routes: Routes = [
       {path: '', component:PostListComponent},
       {path:':id', component:PostDetailsComponent},
       {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
