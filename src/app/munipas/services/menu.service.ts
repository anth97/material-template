import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl: string = environment.menuUrl;

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(`${this.menuUrl}/${url}`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getList<T>(url: string) {
    return this.http.get<T[]>(`${this.menuUrl}/${url}`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API post() method => Create new record
  post(paylods: any) {
    return this.http.post(this.menuUrl, paylods).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  // HttpClient API get() method => Fetch details
  getTableData(api: any[]) {
    return forkJoin(api)
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
