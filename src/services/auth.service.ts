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
  async login({ email, password }: LoginResponse) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { email, password };

    return await this.http
      .post('http://localhost:3000/login', body, { headers })
      .toPromise();
  }

  async checkToken(token: string): Promise<CheckTokenResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return (await this.http
      .get('http://localhost:3000/user/auth', { headers })
      .toPromise()) as CheckTokenResponse;
  }

  /*
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

interface LoginResponse {
  email: string;
  password: string;
}

interface CheckTokenResponse {
  message?: string;
  data?: {
    email: string;
    exp: number;
    iat: number;
    sub: string;
  };
}
