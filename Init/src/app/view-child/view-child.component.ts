import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  /* Va a ser estático true si siempre va a estar en el template
  En false cuando tiene validaciones con ngIf */
  @ViewChild('infoMaggot', { static: true }) infoMaggot: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.infoMaggot.nativeElement, 'DOM');
    console.log(this.infoMaggot.nativeElement.value, 'Valor del input');
    /* Cambiando valor al input del DOM */
    this.infoMaggot.nativeElement.value = 'Maggot';
  }

}
