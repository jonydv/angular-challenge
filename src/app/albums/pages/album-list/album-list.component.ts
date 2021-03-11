import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/albums.interface';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];
  tableHeads: string[]= ['Id', 'UserId', 'Title', 'Ver'];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums(1)
      .subscribe( albums => this.albums = albums);
  }


}
