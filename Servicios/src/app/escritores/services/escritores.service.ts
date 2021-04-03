import { Injectable } from '@angular/core';

import { ESCRITORES } from "../db/escritores.db"
import { Escritor } from '../models/escritor';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[] {  
    return ESCRITORES;
  }

  /* Para trabajar con servicios del backend */
  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    })
  }

  getFilterCountry(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      if (pPais === '') {
        this.getAllPromise();
      } else {
        const filtrado = ESCRITORES.filter(elem => {      
          return elem.pais === pPais;
        })
        resolve(filtrado);
      }
      resolve(ESCRITORES);
    })
  }

  /* Aquí ya no va la Promise<Escritor> en array porque solo me va a devolver un solo id */
  getEscritorById(pId: number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritor = ESCRITORES.find(elemn => elemn.id === pId);
      resolve(escritor);
    })
  }

}
