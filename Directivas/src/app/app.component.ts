import { Component } from '@angular/core';
import { Producto } from './caja/models/producto-model';
import { ProductoCompra } from './compras/models/producto-model';
import { Tarea } from './comunicacionDatos/models/tarea-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  propiedadesParrafo: any;
  mostrar: boolean;
  valor1: boolean;
  personas: any[];
  opcionNumero: number;

  /* COMUNICACIÓN */
  arrayTareas: Tarea[];
  /* COMUNICACIÓN */

  /* CAJA */
  arrayComida: Producto[];
  arrayBebida: Producto[];
  productosSeleccionados: Producto[];
  /* CAJA */

  /* COMPRA */
  productosSeleccionadosCompra: ProductoCompra[];
  productosCompradosCompra: ProductoCompra[];
  /* COMPRA */

  constructor () {
    this.propiedadesParrafo = {
      color: '',
      fontSize: '20px'
    }
    this.mostrar = false;
    this.valor1 = true;
    this.personas = [
      { nombre: 'Chris', apellido: 'Test', edad: 14 },
      { nombre: 'Xavi', apellido: 'Exam', edad: 24 },
      { nombre: 'Dani', apellido: 'Work', edad: 34 }
    ]
    this.opcionNumero = 17;
    this.arrayTareas = [];

    /* CAJA */
    this.productosSeleccionados = [];
    this.arrayComida = [ 
      new Producto('Cocido', 'https://images.unsplash.com/photo-1605543986865-76ff0c4ee22d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80', 12),
      new Producto('Papas', 'https://images.unsplash.com/photo-1579888944884-c7fc5a553848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80', 20),
      new Producto('Arroz', 'https://images.unsplash.com/photo-1610919080042-46e33e264d31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80', 20.20),
      new Producto('Cuy', 'https://images.unsplash.com/photo-1542444256-9dd3e45c9b81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80', 19.12),
    ];
    this.arrayBebida = [
      new Producto('Gaseosa', 'https://images.unsplash.com/photo-1609788174793-f3ea618960ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80', 1.14),
      new Producto('Gallito', 'https://images.unsplash.com/photo-1563223771-2f0a37bc3129?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80', 9.12),
      new Producto('Agua', 'https://images.unsplash.com/photo-1547650221-62fbf15e8908?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80', 1.12),
      new Producto('Tomate', 'https://images.unsplash.com/photo-1522877341927-e5dc72935d29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80', 10),
    ];
  /* CAJA */

  /* COMPRA */
  this.productosSeleccionadosCompra = [];
  this.productosCompradosCompra = [];
  /* COMPRA */
  }
  
  color(pColor: string) {
    switch (pColor) {
      case 'verde':
        this.propiedadesParrafo = {
          color: 'green',
          fontSize: '20px'
        }
        break;
      case 'rojo':
        this.propiedadesParrafo = {
          color: 'red',
          fontSize: '20px'
        }
        break;
      case 'amarillo':
        this.propiedadesParrafo = {
          color: 'yellow',
          fontSize: '20px'
        }
        break;
      default: 
        break;
    }
  }

  mostrarTexto() {
    if (this.mostrar === false) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
    /* O usar */
    /* this.mostrar = !this.mostrar; */
  }

  valoresCambian() {
    this.valor1 = !this.valor1;
  }
  
  Seleccionar(pSelect) {
    switch (pSelect) {
      case 1:
        this.opcionNumero = 1;
        break;
      case 2:
        this.opcionNumero = 2;
        break;
      case 3:
        this.opcionNumero = 3;
        break;
      case 4:
        this.opcionNumero = 4;
        break;
      case 5:
        this.opcionNumero = 5;
        break;
    }
  }

  /* COMUNICACIÓN */
  recibiendoTareas($event) {
    this.arrayTareas.push($event);
  }
  /* COMUNICACIÓN */

  /* CAJA */
  recibirTotal($event) {    
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre)
    if (productoEncontrado) {
      productoEncontrado.cantidad ++;
    } else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }
  }
  /* CAJA */

  /* COMPRA */
  recibeProductoCreado($event) {
    this.productosSeleccionadosCompra.push($event)
  }

  elementSelecionado($event) {
    const produts = this.productosSeleccionadosCompra.splice($event, 1);  
    this.productosCompradosCompra.push(produts[0])
  }

  elementNoSelecionado($event) {
    const produts = this.productosCompradosCompra.splice($event, 1);  
    this.productosSeleccionadosCompra.push(produts[0])
  }
  /* COMPRA */
}
