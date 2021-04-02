import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { FormularioComponent } from './comunicacionDatos/formulario/formulario.component';
import { ListaComponent } from './comunicacionDatos/lista/lista.component';
import { ListaProductosComponent } from './caja/lista-productos/lista-productos.component';
import { ComandaComponent } from './caja/comanda/comanda.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';
import { FormularioCompraComponent } from './compras/formulario-compra/formulario-compra.component';
import { ListaCompraComponent } from './compras/lista-compra/lista-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    FormularioComponent,
    ListaComponent,
    ListaProductosComponent,
    ComandaComponent,
    SubrayadoDirective,
    FormularioCompraComponent,
    ListaCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
