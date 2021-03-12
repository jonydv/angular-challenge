import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/posts/interfaces/posts.interface';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/users.interface';
import { Album } from '../../albums/interfaces/albums.interface';
import { Todo } from '../../todos/interfaces/todos.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUsersUrl: string = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUsersUrl}`);
  }

  getUsersById(id: string): Observable<User>{
    return this.http.get<User>(`${this.baseUsersUrl}/${id}`);
  }

  getUserPosts(id: string): Observable<Post[]>{
      return this.http.get<Post[]>(`${this.baseUsersUrl}/${id}/posts`);
  }

  getUserAlbums(id: string): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseUsersUrl}/${id}/albums`);
}

getUserTodos(id: string): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseUsersUrl}/${id}/todos`);
}

}