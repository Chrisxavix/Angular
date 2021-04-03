import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;
  constructor(
    private HttpClient: HttpClient,
  ) { 
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]> {
    return this.HttpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/${pId}`).toPromise();
  }

  /* Usado en EngiCoders */
  getAllEngicoders() {
    return this.HttpClient.get(this.baseUrl);
  }

  create(title, body, userId): Promise<any> {
    const bodyRequest = {title, body, userId}
    return this.HttpClient.post<any>(this.baseUrl, bodyRequest).toPromise();
  }

  createV2(title, body, userId): Promise<any> {
    const bodyRequest = {title, body, userId}
    /* Se puede agregar headers a cualquier petición */
    /* Se usa para temas de autenticación */
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json; charset=UTF-8'
      })
    }
    return this.HttpClient.post<any>(this.baseUrl, bodyRequest, httpOptions).toPromise();
  }

  update(id, title, body, userId): Promise <any> {
    const bodyRequest = {id, title, body, userId}
    return this.HttpClient.put(`${this.baseUrl}/${id}`, bodyRequest).toPromise();
  }

  delete(id): Promise <any>{
    return this.HttpClient.delete(`${this.baseUrl}/${id}`).toPromise();
  }
}
