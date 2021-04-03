import { Component, OnInit } from '@angular/core';
import { ServiceRiMorService } from '../services/service-ri-mor.service';

@Component({
  selector: 'app-ricky-morty',
  templateUrl: './ricky-morty.component.html',
  styleUrls: ['./ricky-morty.component.scss']
})
export class RickyMortyComponent implements OnInit {

  /* Paginar */
  currentPage: number;
  numPages: number;

  traeDatos: any[];
  constructor(
    private ServiceRiMorService: ServiceRiMorService,
  ) { 
    this.currentPage = 1;
  }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes() {
    this.ServiceRiMorService.getAllPersonajes().then(response => {
      this.traeDatos = response.results;
      this.numPages = response.info.pages;
    }).catch(error => {
      console.log(error);
    })
  }

  cambiarPagina(siguiente) {
    if (siguiente) {
      this.currentPage ++;
    } else {
      this.currentPage --;
    }
    /* Control para que no sea menos de cero, o mayor al número de página existentes */
    /* Opción desde el ts */
    /* if (this.currentPage <= 0) {
      this.currentPage = 1;
    } else if (this.currentPage > this.numPages) {
      this.currentPage = this.numPages;
    } */

    /* Opción desde el html con disabled*/
    /* <button (click)="cambiarPagina(false)" class="btn btn-primary" [disabled]="currentPage === 1">Anterior</button>
    <button (click)="cambiarPagina(true)" class="btn btn-primary ml-2" [disabled]="currentPage === numPages">Siguiente</button> */
    this.ServiceRiMorService.getAllPersonajes(this.currentPage).then(response => {
      this.traeDatos = response.results;
    }).catch(error => {
      console.log(error);
    })
  }
}
