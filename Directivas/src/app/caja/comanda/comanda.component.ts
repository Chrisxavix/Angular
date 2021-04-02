import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models/producto-model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  @Input() arrayProductos: Producto[];
  total: number;
  constructor() {
    this.total = undefined;
  }

  ngOnInit() {
  }

  calcularTotal() {
    let resultado = 0;
    this.arrayProductos.forEach(elem => {
      resultado += (elem.precio * elem.cantidad)
    })
    return resultado;
  }

  borrarProducto(item) {
    if (this.arrayProductos[item].cantidad ===1){
      this.arrayProductos.splice(item, 1)
    } else {
      this.arrayProductos[item].cantidad--;
    }
  }
}
