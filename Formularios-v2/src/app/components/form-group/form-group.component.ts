import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  form: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
  ) {
    /* Al usar con un this.FormBuilder me permite no estar creando con new:
    name: new FormControl('', [Validators.required]), */

    this.form = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      /* Min para que sea de mínimo 18 años */
      edad: ['', [Validators.min(18)]],
      date: ['', [Validators.required]],
      email: ['', [Validators.email]],
      text: ['', [Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    /* Visualizo cada cambio realizado en el formulario */
    this.form.valueChanges.pipe(debounceTime(500))
    .subscribe(value => {
      console.log(value, 'value');
    })
  }

  ngOnInit() {
  }

  save(event: Event) {
    /* Evento por default de html es recargar la página, con el preventDefault
    se asegura que no lo haga */
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value, 'Excelente');
    } else {
      console.log('Error');      
      this.form.markAllAsTouched();
    }
  }

  doSomething() {
    console.log('click');
  }

}
