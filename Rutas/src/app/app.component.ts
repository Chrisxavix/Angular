import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  seleccionBoton(path: string): void {
    this.router.navigate([path])
  }

  /* Para enviar con parámetros se usa: */
  
  /* goProducts() {
    this.router.navigate(['/products'], { queryParams: { order: 'popular' } });
  } */
}
