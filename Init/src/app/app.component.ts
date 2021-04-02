import { Component, Input } from '@angular/core';
import { Tarea } from './comunicacion/models/tarea_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* Datos para el decorador input, rambo xD */
  titulos: string[];

  /* Datos para la suma con decorador */
  numero1: number;
  numero2: number;

  /* Para el cronómetro */
  valores: number[];
  /* Para el [(ngModel)] */
  campoTexto: string;

  /* Para el objeto */
  persona: any;

  /* COMUNICACIÓN */
  /* Obtiene valores del hijo */
  /* Definimos el array para agregar las tareas */
  tareas: Tarea[];
  /* COMUNICACIÓN */

  constructor () {
    /* Datos para el decorador input, rambo xD */
    this.titulos = ["Rambo", "The Rock", "September"];
    /* Datos para la suma con decorador */
    this.numero1 = 100;
    this.numero2 = 50;
    /* Para el cronómetro */
    this.valores = [12, 4, 9]
    /* Para el [(ngModel)] */
    this.campoTexto = 'Es un campo de texto';
    /* Para el objeto */
    this.persona = {};
    /* Array de comunicación iniciado */
    this.tareas = [];
    /* this.resultado = []; */
  }

  onAlertaPulsada($event) {
    console.log($event);
  }

  Recibiendo($event) {
    console.log($event);
  }

  /* COMUNICACIÓN */
  /* El $event es el objeto que trae desde el hijo */
  recibiendoDatos($event) {
    this.tareas.push($event)
  }
}
