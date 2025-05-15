import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import IMutant from 'src/interfaces/Mutant';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XMenService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }
  async getMutants(params?: GetMutantsParams) {
    const token = this.cookieService.get('x-men-token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    let httpParams = new HttpParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value);
        }
      });
    }

    return await firstValueFrom(
      this.http.get<GetMutantsResponse>('http://localhost:3000/mutant', {
        headers,
        params: httpParams,
      })
    );
  }
}

interface GetMutantsParams {
  id?: string;
  name?: string;
  category?: string;
  side?: "good" | "evil";
}

interface GetMutantsResponse {
  data?: IMutant[];
  message?: string;
}
