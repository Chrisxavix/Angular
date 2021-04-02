import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  mensaje: string;
  constructor() { 
    this.mensaje = 'Mensaje inicial'
  }

  ngOnInit() {
  }

  presionar() {
    alert('Sin sección de eventos en el log')
  }

  presionarEvent($event) {
    alert('Con sección de eventos en el log')
    console.log($event);
  }

  selectItem($event) {
    console.log($event.target.value);
    if ($event.target.value === "tres") {
      alert('Intruso xd')
    }
    let xd = $event.target.value;
  }

  pasar($event) {
    this.mensaje = 'Pasando sobre el div';
  }

  salir($event) {
    this.mensaje = 'Mensaje inicial';
  }

  inputChangeItem($event) {
    console.log($event.target.value);
  }

  inputItem($event) {
    console.log($event.target.value);
    this.mensaje = $event.target.value
  }

  focusItem($event) {
    console.log($event.target.value, 'Recibe el foco');
  }

  blurItem($event) {
    console.log($event.target.value, 'Pierde el foco con blur');
  }

}
