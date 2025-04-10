import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import User from 'src/interfaces/User';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user?: User;

  constructor(
    private router: Router,
    private storageService: Storage,
    private authService: AuthService
  ) {
    this.storageService.create();
  }

  async ngOnInit() {
    this.user = await this.storageService.get('user');

    if (!this.user) {
      this.router.navigateByUrl('/login');
      return;
    }

    const resp = (await this.authService.checkToken(
      this.user.token,
      this.user.username
    )) as any;

    if (!resp || !resp.data) this.router.navigateByUrl('/login');

    this.router.navigateByUrl('/home');
  }
}
