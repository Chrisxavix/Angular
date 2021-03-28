import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {

  valor1: number;
  valor2: number;
  resultado: number;
  @Output() resultSum = new EventEmitter<number>();
  constructor() {  }

  ngOnInit() {
  }

  calcular() {
    this.resultado = this.valor1 + this.valor2;
    this.resultSum.emit(this.resultado);
  }
}
