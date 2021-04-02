import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputAddModule } from './view/input-add/input-add.module';
import { Componente2Module } from './view/componente2/componente2.module';
import { Componente1Module } from './view/componente1/componente1.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputAddModule,
    Componente1Module,
    Componente2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
