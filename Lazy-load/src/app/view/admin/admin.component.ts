import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
