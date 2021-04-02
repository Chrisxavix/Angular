import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {
  valor: number;

  constructor() { 
    this.valor = 10;
  }

  ngOnInit() {
  }

  iniciar () {
    let interval = setInterval(()=> {
      this.valor--;
      if (this.valor === 0) {
        clearInterval(interval)
      }
    }, 1000);
  }

}
