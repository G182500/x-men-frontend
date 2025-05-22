import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JSON_HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const url = 'http://localhost:3000/login';

    return await firstValueFrom(
      this.http.post<LoginResponse>(url, credentials, {
        headers: this.JSON_HEADERS,
      })
    );
  }

  async checkToken(token: string): Promise<CheckTokenResponse> {
    const url = 'http://localhost:3000/user/auth';
    const headers = this.JSON_HEADERS.set('Authorization', `Bearer ${token}`);

    return await firstValueFrom(
      this.http.get<CheckTokenResponse>(url, { headers })
    );
  }
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  data?: { token: string };
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
