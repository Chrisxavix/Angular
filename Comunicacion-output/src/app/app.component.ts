import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resultadoSuma: number;
  resultadoInter: string;
  showSuma = false;
  showInter = false;
  constructor() { }

  ngOnInit() {
  }

  response($event) {
    this.resultadoSuma = $event;
    if (isNaN(this.resultadoSuma)) {
      this.showSuma = false;
    } else {
      this.showSuma = true;
    }
  }

  responseInter($event) {
    this.resultadoInter = $event;
    this.showInter = true;
  }
}