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
    return this.http.get<Todo[]>(`${this.baseUrl}/todos?_page=${page}&_limit=20`);
  }

  getTodosFiltered(page: number, completed:boolean): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseUrl}/todos?completed=${completed}&_page=${page}&_limit=20`);
  }

  getTodosFilteredById(page: number, asc:string): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseUrl}/todos?_sort=id&_order=${asc}&_page=${page}&_limit=20`);
  }

  getTodoById(id: string): Observable<Todo>{
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  updateTodoById(todo: Todo): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/todos/${todo.id}`, todo);
  }
}