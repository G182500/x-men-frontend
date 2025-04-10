import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/interfaces/User';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  user?: User;

  constructor(public router: Router, private authService: AuthService) {}

  async ngOnInit() {}

  async submit() {
    console.log(this.form);
    /*await this.authService.login({
      email: 'gabriel@gmail.com',
      password: 'senhaforte',
    });

    this.storageService.set('user', resp.data);
    */
  }
}
