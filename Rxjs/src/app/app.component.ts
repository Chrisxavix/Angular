import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.intervalRxJs();        
  }

  /* Interval */
  /* Actúa como un Settimeout */
  intervalRxJs() {
    const contador = interval(1000);
    contador.subscribe(resp => {
      console.log(resp, '????');
      if (resp === 2) {
        console.log('Valor de 2');
      }
    })
  }

}
