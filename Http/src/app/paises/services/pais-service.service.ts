import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  baseUrl: string
  constructor(
    private HttpClient: HttpClient,
  ) { 
    this.baseUrl = 'https://restcountries.eu/rest/v2/region/americas'
  }

  getAll(): Promise<any[]> {
    return this.HttpClient.get<any[]>(this.baseUrl).toPromise()
  }
}
