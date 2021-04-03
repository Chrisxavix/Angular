import { Component } from '@angular/core';
import { Persona } from './models/persona-model';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personas: Persona[];
  personasPromesa: Persona[];
  personasAwait: Persona[];
  falsos: Persona[];
  activos: Persona[];
  constructor(private personaService: PersonaService) {
  }

  ngOnInit() {
    this.personas = this.personaService.getAll();
    this.falsos = this.personaService.getFalsos();
    this.activos = this.personaService.getActivos();
  }

  agregarPersona() {
    this.personaService.createPerson(new Persona('Juan', 'Test', 12, true))
  }

  /* Con Promesas, borrar el async */
  /* personasActivas() {
    this.personaService.getActivosPromesa().then(arrayTemporalPersonas => {
      console.log(arrayTemporalPersonas);
    }).catch(err => {
      console.log(err);
    })
  } */

  /* Con async await, se agrega el async al inicio */
  async personasActivas() {
    try {
      this.personas=  await this.personaService.getActivosPromesa();
    } catch(err) {
      console.log(err);
    }    
  }

}
