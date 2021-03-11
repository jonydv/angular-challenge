import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
