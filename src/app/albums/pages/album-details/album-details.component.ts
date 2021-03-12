import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';

import { AlbumsService } from '../../services/albums.service';
import { AlbumPhoto } from '../../interfaces/albumPhoto.interface';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { Album } from '../../interfaces/albums.interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumPhotos: AlbumPhoto[] = [];
  album!: Album;
  showUser: boolean = false;
  showGallery: boolean = false;

  constructor(private albumsService: AlbumsService,
              private activatedRoutes: ActivatedRoute,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoutes.params
      .pipe(
        switchMap(({id}) => this.albumsService.getAlbumPhotosById(id))
      )
      .subscribe(albumPhotos => this.albumPhotos = albumPhotos)
    
    this.activatedRoutes.params
      .pipe(
        switchMap(({id}) => this.albumsService.getAlbumById(id))
      )
      .subscribe(album => this.album = album)
  }

  deletePhoto(id: number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No podrás recuperar la imgen borrada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.albumsService.deletePhotoById(id)
          .subscribe(result=>console.log(result));
        this.albumPhotos = this.albumPhotos.filter(p => p.id != id);
        Swal.fire(
          'Imagen borrada!',
          'Se borro exitosamente',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu imagen esta a salvo!',
          'error'
        )
      }
    })
    
  }

  viewPhoto(photo: AlbumPhoto):void{
    const modal = this.matDialog.open(ModalComponent, {
      data: photo
    });
  }

  setShowUser():void{
    this.showUser = !this.showUser;
  }

  setShowGallery():void{
    this.showGallery = !this.showGallery;
  }

}
