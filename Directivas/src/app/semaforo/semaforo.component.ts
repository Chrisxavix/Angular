import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.scss']
})
export class SemaforoComponent implements OnInit {
  cadenaClases: string;
  arrayClases: string[];

  colorSeleccionado: string;
  constructor() {
    this.cadenaClases = 'rojo';
    this.arrayClases = ['verde', 'rojo'];
    this.colorSeleccionado = '';
  }

  ngOnInit() {
    /* Los colores van intercalando de acuerdo al setTime */
    setTimeout(()=> {
      /* Cambia de color a los 3s */
      this.colorSeleccionado = 'a';
    }, 2000)

    setTimeout(()=> {
      /* Cambia de color a los 4s */
      this.colorSeleccionado = 'v';
    }, 4000)

    setTimeout(()=> {
      /* Cambia de color a los 6s */
      this.colorSeleccionado = 'r';
    }, 6000)
  }

}
