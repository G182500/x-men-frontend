import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(public router: Router, private authService: AuthService, private cookieService: CookieService,) { }

  async onClickSubmit() {
    const userEmail = this.email.value;
    const userPass = this.password.value;

    if (userEmail && userPass) {
      const { data } = await this.authService.login({
        email: userEmail,
        password: userPass,
      }) as any;

      console.log(data);

      this.cookieService.set("x-men-token", data.token);
      this.router.navigateByUrl('/home');
    }
  }

  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }
}