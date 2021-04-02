import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  /* Agregar el diseño en el template, quitar el templateUrl */
  /* template:'<h1>ChrisTest</h1>', */
  styleUrls: ['./saludo.component.scss']
  /* Con estilos funciona igual */
  /* styles: [
    `.test {color: blue}`
  ] */
})
export class SaludoComponent implements OnInit {
  mensaje: string;
  identiParrafo: string;
  identiParrafo2: string;
  inputText: string;
  
  constructor() { 
    this.mensaje = 'Hola Maggot';
    this.identiParrafo = 'parrafoPrincipal';
    this.identiParrafo2 = 'parrafoPrincipalDos';
    this.inputText = 'number';

    /* Pasado los 5s se cambia el mensaje */
    setTimeout(()=> {
      this.mensaje = 'Hola Dani'
    }, 5000);

  }

  ngOnInit() {
  }

  mostrarSaludo(): void {
    alert('Hi Maggot')
  }

}
