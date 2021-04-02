import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {
  num1: number;
  num2: number;
  resultado: number;
  
  constructor() { 
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
