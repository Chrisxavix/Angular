# ToastNotification
Versión: 8.3.21.

* Ir a la documentación: https://www.npmjs.com/package/ngx-toastr

* Fijarse en la versión de angular que se está usando: ng version

* En este caso es la versión 8, por lo que se usa: npm install ngx-toastr@10.1.0 --save

* En el archivo (angular.json), en la sección styles del build agregar:
"styles": ["styles.scss", "node_modules/ngx-toastr/toastr.css"]

* En el módulo principal usar:
    * BrowserAnimationsModule, import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    * ToastrModule.forRoot(), import { ToastrModule } from 'ngx-toastr';
    