import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor() { }

  getLibrosAll() {
    return LIBROS;
  }

  getByEscritor(escritorId): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      const filtrado = LIBROS.filter(elemn => elemn.escritor === escritorId);
      resolve(filtrado)
    })
  }
}
