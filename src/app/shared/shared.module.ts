import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent, TableComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [
    TableComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class SharedModule { }
