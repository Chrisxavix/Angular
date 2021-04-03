import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  recibeDatos: Empleado[];
  constructor( private EmpleadosService: EmpleadosService ) { }

  ngOnInit() {
    this.datos();
  }

  datos () {
    this.EmpleadosService.list().then(response => {
      this.recibeDatos = response;
    }).catch(error => {
      console.log(error);
    })
  }
}
