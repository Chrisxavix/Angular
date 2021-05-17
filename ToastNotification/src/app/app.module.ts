import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastTestComponent } from './toast-test/toast-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      /* preventDuplicates evita que se genere cadena de notificaciones */
      /* preventDuplicates: true, */
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
