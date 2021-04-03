import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceRiMorService {

  baseUrl: string;
  constructor( 
    private HttpClient: HttpClient,
  ) { 
    this.baseUrl = 'https://rickandmortyapi.com/api';
  }

  /* Si no se le envia un parámetro, la paginación será en la primera página */
  getAllPersonajes(pPage = 1): Promise<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/character?page=${pPage}`).toPromise();
  }

  getAllLocalizacion(): Promise<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/location`).toPromise();
  }

  getAllEpisodio(): Promise<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/episode`).toPromise();
  }
}
