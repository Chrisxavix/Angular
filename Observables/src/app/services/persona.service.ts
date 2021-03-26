import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface Persona {
  nombre: string;
  apellido: string;
  empresa: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[];
  /* Hay que decirle lo que va a emitir */
  personas$: Subject<Persona[]>;
  constructor() { 
    this.personas = [];
    this.personas$ = new Subject();
  }

  addPerson(persona: Persona) {    
    this.personas.push(persona);
    this.personas$.next(this.personas)
  }

  getPerson(): Observable<Persona[]> {
    return this.personas$.asObservable();
  }
}
