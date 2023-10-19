import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const user = localStorage.getItem('user');

    if (user) {
      return true;
    } else {
      Swal.fire("","Usuario no autorizado","error")
      this.router.navigate(['/login']);
      return false;
    }
  }
}
