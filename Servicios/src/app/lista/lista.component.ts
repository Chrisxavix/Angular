import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona-model';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  personas: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personas = this.personaService.getAll();
  }

}
