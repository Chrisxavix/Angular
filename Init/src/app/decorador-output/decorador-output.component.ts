import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.scss']
})
export class DecoradorOutputComponent implements OnInit {

  @Input() mensaje: string;
  @Input() subtitulo: string;

  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = 'Mensaje por defecto'
    this.subtitulo = 'Subtitulo por defecto'

    this.alertaPulsada = new EventEmitter();
  } 

  ngOnInit() {
  }

  pressSection($event) {
    /* Envía al padre */
    this.alertaPulsada.emit('Desde el hijo')
  }
}
