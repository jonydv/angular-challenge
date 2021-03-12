import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AlbumsService } from '../../services/albums.service';
import { AlbumPhoto } from '../../interfaces/albumPhoto.interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumPhotos: AlbumPhoto[] = [];
  constructor(private albumsService: AlbumsService,
              private activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoutes.params
      .pipe(
        switchMap(({id}) => this.albumsService.getAlbumPhotosById(id))
      )
      .subscribe(albumPhotos => this.albumPhotos = albumPhotos)
  }

  deletePhoto(id: number):void{
    this.albumPhotos = this.albumPhotos.filter(p => p.id != id);
  }

}
