import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma-input',
  templateUrl: './suma-input.component.html',
  styleUrls: ['./suma-input.component.scss']
})
export class SumaInputComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  resultado: number;
  
  constructor() { 
    /* Por defecto, en caso de que el padre no tenga los datos*/
    this.num1 = 78;
    this.num2 = 3;
    this.resultado = null;
  }

  ngOnInit() {
  }

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

}
