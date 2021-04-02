import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorador-input',
  templateUrl: './decorador-input.component.html',
  styleUrls: ['./decorador-input.component.scss']
})
export class DecoradorInputComponent implements OnInit {
  @Input() mensaje: string;
  @Input() subtitulo: string;
  constructor() { 
    this.mensaje = 'Mensaje por defecto'
    this.subtitulo = 'Subtitulo por defecto'
  } 

  ngOnInit() {
  }

}
