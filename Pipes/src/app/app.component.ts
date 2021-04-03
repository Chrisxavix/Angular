import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  /* CurrencyPipe */
  precio: number;

  /* DecimalPipe */
  numeroDecimal: number;

  /* DatePipe */
  fechaActual: Date;

  /* PercentPipe */
  numberPercet: number;

  /* Pipe LowerCasePipe, UpperCasePipe y TitleCasePipe */
  cadena: string;

  /* SlicePipe */
  arraySlice: string[];
  constructor() {
    this.precio = 12.76;
    this.numeroDecimal = 19.17689834983;
    this.fechaActual = new Date();
    /* números ramdom entre 0 y 1 */
    this.numberPercet = Math.random();
    this.cadena = 'Christian, el chido'
    this.arraySlice = ['perro', 'gato', 'conejo', 'loro']
  }

  ngOnInit() {
    setInterval(()=> {
      this.fechaActual = new Date();
    }, 1000)
  }
}
