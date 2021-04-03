import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './componentes/info/info.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { NoPageComponent } from './componentes/no-page/no-page.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { ProyectosComponent } from './componentes/empleado/proyectos/proyectos.component';
import { CurriculumComponent } from './componentes/empleado/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleado/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    NoPageComponent,
    InicioComponent,
    EmpleadoComponent,
    ProyectosComponent,
    CurriculumComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
