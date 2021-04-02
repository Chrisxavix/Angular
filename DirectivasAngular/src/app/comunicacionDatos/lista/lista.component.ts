import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];
  constructor() {
  }

  ngOnInit() {
  }

  cambiarEstado(tarea: Tarea) {
    tarea.completo = !tarea.completo;
  }

  borrarTarea(rIndex: number) {
    this.tareas.splice(rIndex, 1);
  }
}
