import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor( private PersonaService: PersonaService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      empresa: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl(),
    })
  }

  ngOnInit() {
  }

  ngSubmit() {
    this.PersonaService.addPerson(this.formulario.value);
    this.formulario.reset();
  }

}
