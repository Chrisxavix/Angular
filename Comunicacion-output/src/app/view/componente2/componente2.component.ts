import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

  nombre: string;
  apellido: string;
  @Output() resulInter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  interpolar() {
    const inter = `Sus nombres completos son: ${this.nombre} ${this.apellido}`;
    this.resulInter.emit(inter);
  }
}
