import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ServiceEmailService } from './service-email/service-email.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {

  form: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private ServiceEmailService: ServiceEmailService,
  ) { 
    this.form = this.FormBuilder.group({
      /* email: ['', Validators.email, MyValidators.validateEmail(this.ServiceEmailService)], */
      email: ['', Validators.email, this.validateEmail.bind(this)],
    });
  }

  ngOnInit() {
  }


  /* Hacer directamente desde el componente y no desde util */
  validateEmail(control: AbstractControl) {
    const value = control.value;
    return this.ServiceEmailService.checkEmail(value)
      .pipe(
        map(response => {
          const isEmailAvailable = response.isEmailAvailable;
          return isEmailAvailable ? null : { notAvailable: true };
        })
      );
  }
}
