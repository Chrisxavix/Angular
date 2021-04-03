import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccionGuardGuard implements CanActivate {

  constructor(private router: Router) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const aleatorio = 0.1;
      if (aleatorio > 1) {
        return true;
      } else {
        /* Se podría hacer un componente para que nos indique que no tiene permiso, ahorita envía una direccion no existente, por lo tanto la ruta pasa a ser tomado como algono inexistente, da error */
        this.router.navigate(['no-tiene-acceso'])
        return false;
      }
  }
  
}
