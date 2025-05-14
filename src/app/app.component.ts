import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myToken: string | undefined;
  user?: { email: string };

  constructor(
    private router: Router,
    //private storageService: Storage,
    private authService: AuthService,
    private cookieService: CookieService,
    private location: Location
  ) {
    //this.storageService.create();
  }

  async ngOnInit() {
    this.myToken = this.cookieService.get('x-men-token');

    if (!this.myToken) {
      this.router.navigateByUrl('/login');
      return;
    }

    const resp = await this.authService.checkToken(this.myToken) as any;
    if (!resp || !resp.data) this.router.navigateByUrl('/login');

    if (this.location.path() === "/login") this.router.navigateByUrl('/home');
  }
}
