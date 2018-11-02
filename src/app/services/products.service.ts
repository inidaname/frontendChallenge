import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private mockURL = 'api/data.json';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.mockURL).pipe(
      tap(),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
