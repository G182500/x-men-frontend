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
  inputType = 'password';

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    public router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  async onClickSubmit() {
    try {
      const { data } = await this.authService.login({
        email: this.email.value!,
        password: this.password.value!,
      });

      this.cookieService.set('x-men-token', data!.token);
      this.router.navigateByUrl('/');
    } catch (error: any) {
      console.error(error);
      /*this.errorMessage =
        error?.error?.message || 'Erro inesperado ao tentar fazer login.';*/
    }
  }

  togglePasswordVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }
}
