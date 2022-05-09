import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;



  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    const url = `${this.baseUrl}/login`;
    const body = { user, password };
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token);
            this._user = { user, password, uid: resp.user };
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(false))
      )
  }

  validateToken(): Observable<boolean> {
    const url = `${this.baseUrl}/validate`;
    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '');
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          // repetir coódigo de login
          return resp.ok;
        }),
        catchError(err => of(false)));
  }


}
