import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { Componente1Module } from '../componente1/componente1.module';
import { Componente2Module } from '../componente2/componente2.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Componente1Module,
    Componente2Module,
  ]
})
export class AdminModule { }
