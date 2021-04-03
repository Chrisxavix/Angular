import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formNewEmpleado: FormGroup;
  constructor(private EmpleadosService: EmpleadosService) {
    this.formNewEmpleado = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      edad: new FormControl(''),
      departamento: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl(''),
    }
    );
  }

  ngOnInit() {
  }

  getDatos() {
    const datoEmpleado = this.formNewEmpleado.value;
    this.EmpleadosService.insert(datoEmpleado);
    this.formNewEmpleado.reset();
  }

}
