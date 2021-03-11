import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todos.interface';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getTodos(page: number): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseUrl}/todos?_page=${page}`);
  }

  getTodoById(id: string): Observable<Todo>{
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }
}