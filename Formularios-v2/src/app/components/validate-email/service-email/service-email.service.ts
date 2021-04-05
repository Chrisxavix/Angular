import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmailService {

  constructor() { }

  checkEmail(email: string) {
    console.log(email, 'entra');
    
    // simulate http.get()
    return of({ isEmailAvailable: email !== 'nicolas@gmail.com'})
      .pipe(delay(2000));
  }
}
