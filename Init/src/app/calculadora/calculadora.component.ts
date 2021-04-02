import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  resultado: any;
  finalizar: boolean;
  constructor() { 
    this.resultado = "";
    this.finalizar = false;
  }

  ngOnInit() {
  }

  concatenar($event) {
    if (this.finalizar) {
      /* el resultado tiene el valor calculado, por eso se le dice que agarre el nuevo valor clickeado, manda a false, por eso cuando se presiona otro botón va directo al else */
      this.resultado = $event.target.innerText;
      this.finalizar = false
    } else {
      this.resultado = this.resultado + $event.target.innerText;
    }
  }

  calcular() {
    this.resultado = eval(this.resultado);
    this.finalizar = true;
  }

  limpiar() {
    this.resultado = "";
  }
}
