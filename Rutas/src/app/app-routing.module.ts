import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionGuardGuard } from './accion-guard.guard';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { CurriculumComponent } from './componentes/empleado/curriculum/curriculum.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { ExperienciaComponent } from './componentes/empleado/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/empleado/proyectos/proyectos.component';
import { InfoComponent } from './componentes/info/info.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NoPageComponent } from './componentes/no-page/no-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioComponent },
  { path: 'informacion', component: InfoComponent, canActivate: [AccionGuardGuard] },
  { path: 'acerca', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'empleados/:empleadoId', component: EmpleadoComponent, children: [
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'curriculum', component: CurriculumComponent },
    { path: 'experiencia', component: ExperienciaComponent },
  ]},
  { path: '**', component: NoPageComponent },
  /* o redirigir */
  /* { path: '**', redirectTo: "informacion"}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
