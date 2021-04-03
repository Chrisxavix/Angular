import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  /* Objeto que representa el formulario */
  formulario: FormGroup;
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(7)
      ]),
      apellidos: new FormControl('', [
        Validators.maxLength(10),
      ]),
      edad: new FormControl('', [
        this.edadValidar
      ]),
      dni: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl(''),
      email: new FormControl('', [
        /* pattern para una expresión regular */
        Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
      ]),
    })
  }

  /* 
  valid - invalid
  pristine(No había sido escrito) - dirty(ya escribimos)
  untouched(sin foco) - touched(ya perdió el foco)
  */

  ngOnInit() {
    this.comprobarEmail();
  }

  /* Para que tenga un tiempo específico antes de mandar a buscar, en dado caso que apunte al backend */
  comprobarEmail() {
    const emailControl = this.formulario.controls.email;
    emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(ele => {
      console.log(ele, 'emailControl');
    })
  }

  save() {
    console.log(this.formulario.value);
  }

  /* Creando un validador propio */
  edadValidar(formControl) {
    const value = formControl.value;
    const maxedad = 65;
    const minedad = 18;
    if (value >= minedad && value <= maxedad) {
      return null;
    } else {
      return { edadvalidar: { maxedad, minedad } }
    }
  }
}
