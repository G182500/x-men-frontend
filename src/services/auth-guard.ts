import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token = this.cookieService.get('x-men-token');

    if (!token) {
      this.router.navigateByUrl('/login');
      return false;
    }

    const resp = await this.authService.checkToken(token);
    if (!resp || !resp.data) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
