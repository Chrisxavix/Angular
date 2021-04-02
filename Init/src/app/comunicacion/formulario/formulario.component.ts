import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea_models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  /* Para enviar al padre */
  @Output() tareaCreada: EventEmitter<Tarea>;
  /* El objeto para obtener los valores */
  nuevaTarea: Tarea;
  constructor() {
    this.nuevaTarea = new Tarea();
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit() {
  }

  enviar() {
    /* Enviar al padre con Output*/
    this.tareaCreada.emit(this.nuevaTarea);
    /* Limpiar después de enviar */
    this.nuevaTarea = new Tarea;
    alert('Se envió datos al padre')
  }

}
