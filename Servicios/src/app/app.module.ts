import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { EscritoresComponent } from './escritores/escritores/escritores.component';
import { DetalleEscritorComponent } from './escritores/detalle-escritor/detalle-escritor.component';
import { LibrosComponent } from './escritores/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EscritoresComponent,
    DetalleEscritorComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
