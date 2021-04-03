import { Component, OnInit } from '@angular/core';
import { Escritor } from '../models/escritor';
import { EscritoresService } from '../services/escritores.service';

@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.scss']
})
export class EscritoresComponent implements OnInit {

  arrayEscritores: Escritor[];
  constructor( private EscritoresService: EscritoresService ) { }

  ngOnInit() {
    /* Opción rápida */
    /* this.arrayEscritores = this.EscritoresService.getAll(); */
    
    /* Promesa */
    /* this.getPromiseEscritores(); */

    /* Async */
    this.getAsyncEscritores();
  }

  /* PROMISE
  Es lo recomendado para servicos de backend, porque espera la llamada */
  getPromiseEscritores() {
    this.EscritoresService.getAllPromise().then(result => {
      this.arrayEscritores = result;
    }).catch(error => {
      console.log(error);
    })
  }

  /* ASYNC AWAI */
  async getAsyncEscritores() {
    try {
      this.arrayEscritores = await this.EscritoresService.getAllPromise();
    } catch (error) {
      console.log(error);
    }
  }

  async selectCountry(item) {
    try {
      this.arrayEscritores = await this.EscritoresService.getFilterCountry(item.target.value);
    } catch (error) {
      console.log(error);
    }
  }

}
