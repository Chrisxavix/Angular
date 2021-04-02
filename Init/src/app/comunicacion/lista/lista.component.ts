import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea_models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  /* El objeto para obtener los valores */
  @Input() tareas: Tarea[];
  constructor() { 
  }

  ngOnInit() {
  }

  mostrarTareas() {
    let resultado = "<ul>"
    this.tareas.forEach(e => {
      resultado +=`<li>${e.titulo} - ${e.descripcion}</li>`
    })
    resultado += "</u>"
    return resultado;
  }
}
