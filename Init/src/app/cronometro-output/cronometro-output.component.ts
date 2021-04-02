import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro-output',
  templateUrl: './cronometro-output.component.html',
  styleUrls: ['./cronometro-output.component.scss']
})
export class CronometroOutputComponent implements OnInit {

  @Input() inicio: number;
  valor: number;

  @Output() terminar: EventEmitter<string>;

  constructor() { 
    this.valor = 10;
    this.terminar = new EventEmitter();
  }

  ngOnInit() {
    this.valor = this.inicio ? this.inicio : 10;
  }

  iniciar () {
    let interval = setInterval(()=> {
      this.valor--;
      if (this.valor < 0) {
        clearInterval(interval)
        this.valor = this.inicio;
        this.terminar.emit(`Terminando con el inicio: ${this.inicio}`)
      }
    }, 1000);
  }

}
