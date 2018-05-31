import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {

  constructor(private _router: Router) {
  }
  canActivate( next: ActivatedRouteSnapshot ): boolean {

     const id = next.url[1].path;  // Récupérer le second argument de l'URL en le convertir en

     if ( isNaN(+id) || (+id < 1)) {
       alert (`ATTENTION, Le id ${id} doit être numérique, on vous redirigera vers la Home Page !`);
       this._router.navigate(['/welcome']);
       return false;
     }
    return true;
  }
}
