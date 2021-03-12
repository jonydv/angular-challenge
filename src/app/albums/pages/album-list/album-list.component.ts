import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/albums.interface';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  page: number = 1;

  albums: Album[] = [];
  tableHeads: string[]= ['Id', 'UserId', 'Title', 'Ver'];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums(this.page)
      .subscribe( albums => this.albums = albums);
  }

  paginationAlbum(page: number): void{

    if(this.page === 1 && page === -1 || this.page === 5 && page=== 1){
      return;
    }
    this.page= this.page + page;
    this.albumsService.getAlbums(this.page)
      .subscribe( albums => this.albums = albums);

  }

}
