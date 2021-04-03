import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  arrayEmpleados: Empleado[];
  constructor() {
    this.arrayEmpleados = [];
  }

  insert(pEmpleado) {
    this.arrayEmpleados.push(pEmpleado);
    console.log(this.arrayEmpleados, 'services');
  }

  list(): Promise<Empleado[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayEmpleados);
    })
  }
}
