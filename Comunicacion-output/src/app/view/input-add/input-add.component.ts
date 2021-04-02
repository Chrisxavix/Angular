import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-add',
  templateUrl: './input-add.component.html',
  styleUrls: ['./input-add.component.scss']
})
export class InputAddComponent implements OnInit {

  valor1: number;
  valor2: number;
  resultado: number;
  show: boolean;

  constructor() { 
    this.valor1 = undefined;
    this.valor2 = undefined;
    this.resultado = undefined;
    this.show = false;
  }

  ngOnInit() {
  }

  calcular() {
    this.resultado = this.valor1 + this.valor2;   
    if (isNaN(this.resultado)) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  resetear() {
    this.valor1 = undefined;
    this.valor2 = undefined;
    this.resultado = undefined;
    this.show = false;
  }
}
