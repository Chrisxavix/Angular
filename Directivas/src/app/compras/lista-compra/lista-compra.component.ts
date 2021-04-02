import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoCompra } from '../models/producto-model';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.scss']
})
export class ListaCompraComponent implements OnInit {

  @Input() tituloBoton: string;
  @Input() productosCompra: ProductoCompra[];
  @Output() elementoSelecionado: EventEmitter<number>;
  constructor() {
    this.elementoSelecionado = new EventEmitter();
  }

  ngOnInit() {
  }

  comprar(indice) {
    this.elementoSelecionado.emit(indice);
  }
}
