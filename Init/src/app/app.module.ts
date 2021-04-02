import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ResponderComponent } from './responder/responder.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumaComponent } from './suma/suma.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { SumaInputComponent } from './suma-input/suma-input.component';
import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
import { CronometroOutputComponent } from './cronometro-output/cronometro-output.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './comunicacion/formulario/formulario.component';
import { ListaComponent } from './comunicacion/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ResponderComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    SumaComponent,
    CronometroComponent,
    CalculadoraComponent,
    DecoradorInputComponent,
    SumaInputComponent,
    DecoradorOutputComponent,
    CronometroOutputComponent,
    FormularioComponent,
    ListaComponent,
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
