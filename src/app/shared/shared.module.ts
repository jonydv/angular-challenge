import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent, TableComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
