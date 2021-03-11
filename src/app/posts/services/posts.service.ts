import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPosts(page: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts?_page=${page}`);
  }

  getPostById(id: string): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
