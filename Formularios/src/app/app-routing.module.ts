import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './componentes/model/model.component';
import { TemplateComponent } from './componentes/template/template.component';
import { FormularioComponent } from './gestion-empleados/formulario/formulario.component';
import { ListaEmpleadosComponent } from './gestion-empleados/lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'list', component: ListaEmpleadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
