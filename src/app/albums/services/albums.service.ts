import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../interfaces/albums.interface';
import { AlbumPhoto } from '../interfaces/albumPhoto.interface';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAlbums(page: number): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseUrl}/albums?_page=${page}&_limit=20`);
  }

  getAlbumById(id: string): Observable<Album>{
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}?_expand=user`);
  }

  getAlbumPhotosById(id: string): Observable<AlbumPhoto[]>{
    return this.http.get<AlbumPhoto[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  deletePhotoById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/photos/${id}`);
  }
}
