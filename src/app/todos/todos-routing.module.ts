import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: ':id',
    component: TodoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
