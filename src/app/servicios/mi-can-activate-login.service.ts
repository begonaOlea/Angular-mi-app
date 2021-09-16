import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class MiCanActivateLoginService implements CanActivate {

  constructor(private autServce: AutenticacionService, private miroute: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(! this.autServce.getEstaLoeado()){
        this.miroute.navigate(['/']);
    }
    return true;
  }

}
