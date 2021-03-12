import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';

import { AlbumsService } from '../../services/albums.service';
import { AlbumPhoto } from '../../interfaces/albumPhoto.interface';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumPhotos: AlbumPhoto[] = [];
  constructor(private albumsService: AlbumsService,
              private activatedRoutes: ActivatedRoute,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoutes.params
      .pipe(
        switchMap(({id}) => this.albumsService.getAlbumPhotosById(id))
      )
      .subscribe(albumPhotos => this.albumPhotos = albumPhotos)
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
        this.albumsService.deletePhotoById(id);
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

}
