import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Persona } from '../models/persona-model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[];
  activos: Persona[];
  falsos: Persona[];
  constructor() {
    this.activos = [];
    this.falsos = [];
    this.personas = [
      new Persona("Maria", "Cepeda", 12, true),
      new Persona("Chris", "Torres", 22, false),
      new Persona("Carlos", "Cruz", 34, true),
      new Persona("Juan", "Campos", 14, false),
      new Persona("Helena", "Quille", 24, true),
      new Persona("Vane", "Pacho", 42, true),
    ]
  }

  getAll() {
    return this.personas;
  }

  getFalsos() {
    this.personas.forEach(elemen => {
      if (elemen.activo === false) {
        this.falsos.push(elemen)
      }
    })
    return this.falsos;
  }

  getActivos() {
    this.personas.forEach(elemen => {
      if (elemen.activo === true) {
        this.activos.push(elemen)
      }
    })
    return this.activos;
  }

  createPerson(personaNueva: Persona) {
    this.personas.push(personaNueva);
  }
  
  getActivosPromesa(): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      const arrayTemporal: Persona[] = [];
      this.personas.forEach(elemen => {
        if (elemen.activo === true) {
          arrayTemporal.push(elemen)
        }
        resolve(arrayTemporal);
      })
    })
    return prom;
  }

  getActivosPromesaVersion2(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => { 
      const arrayTemporal = this.personas.filter(persona => {
        return persona.activo;
      });
      resolve(arrayTemporal);
    })
  }

}
