import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { API } from 'src/app/app.api';
//import { CommonDbService } from './common-db.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient //private commonDbService: CommonDbService
  ) {}
  async checkToken(token: string, username: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return await this.http
      .get(`http://localhost:3000/user?name=${username}`, {
        headers,
      })
      .toPromise();
  }

  async login({ email, password }: { email: string; password: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { email, password };

    return await this.http
      .post('http://localhost:3000/login', body, { headers })
      .toPromise();
  }

  /*auth(user: any): Observable<any> {
    return this.commonDbService.create('user/auth', user);
  }

  resendOtp(userId: string): Observable<any> {
    return this.commonDbService.create('user/auth/otp/resend', { id: userId });
  }

  validateOtp(data: any): Observable<any> {
    return this.commonDbService.create('user/auth/otp', data);
  }

  logout() {
    this.http.delete(`${API}/user/auth`).subscribe((x) => x);
  }*/
}
