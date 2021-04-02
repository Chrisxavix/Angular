import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test02RoutingModule } from './test02-routing.module';
import { Test02Component } from './test02.component';

@NgModule({
  declarations: [Test02Component],
  imports: [
    CommonModule,
    Test02RoutingModule
  ],
  exports: [ Test02Component ]
})
export class Test02Module { }
