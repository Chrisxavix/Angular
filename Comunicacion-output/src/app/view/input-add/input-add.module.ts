import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAddRoutingModule } from './input-add-routing.module';
import { InputAddComponent } from './input-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputAddComponent],
  imports: [
    CommonModule,
    InputAddRoutingModule,
    FormsModule,
  ],
  exports: [InputAddComponent]
})
export class InputAddModule { }
