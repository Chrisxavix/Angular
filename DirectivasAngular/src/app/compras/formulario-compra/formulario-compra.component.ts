import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductoCompra } from '../models/producto-model';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.scss']
})
export class FormularioCompraComponent implements OnInit {

  @Output() productoCreado: EventEmitter<ProductoCompra>;
  nuevoProducto: ProductoCompra;
  constructor() {
    this.nuevoProducto = new ProductoCompra();
    this.productoCreado = new EventEmitter();
  }

  ngOnInit() {
  }

  enviarDatos() {
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new ProductoCompra();
  }
}
