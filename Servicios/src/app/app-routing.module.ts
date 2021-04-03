import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEscritorComponent } from './escritores/detalle-escritor/detalle-escritor.component';
import { EscritoresComponent } from './escritores/escritores/escritores.component';
import { LibrosComponent } from './escritores/libros/libros.component';


const routes: Routes = [
  { path: "escritores", component: EscritoresComponent },
  { path: "escritores/:escrtorId", component: DetalleEscritorComponent, children: [
    { path: "libros", component: LibrosComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
