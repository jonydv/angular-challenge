import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { UserCommentComponent } from './components/user-comment/user-comment.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { CompletedPipe } from './pipes/completed.pipe';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, TableComponent, ModalComponent, UserCommentComponent, PaginationComponent, CompletedPipe],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    UserCommentComponent,
    PaginationComponent,
    FormsModule
  ]
})
export class SharedModule { }
