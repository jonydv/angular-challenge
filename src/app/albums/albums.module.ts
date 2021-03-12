import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumListComponent } from './pages/album-list/album-list.component';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [AlbumListComponent, AlbumDetailsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    SharedModule,
    UsersModule
  ]
})
export class AlbumsModule { }
