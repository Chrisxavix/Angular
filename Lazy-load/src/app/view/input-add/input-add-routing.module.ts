import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputAddComponent } from './input-add.component';

const routes: Routes = [
  {
    path: '',
    component: InputAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputAddRoutingModule { }
