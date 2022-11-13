import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { IStoreNasa } from './modals/store';
import { ErrorService } from './error/error.service';

@Injectable({ providedIn: 'root' })


export class StoreService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    
  ) { }

  getAll(): Observable<IStoreNasa[]> {
    return this.http.get<IStoreNasa[]>('https://api.nasa.gov/planetary/apod?api_key=2TrRj1qpy5pc3xgOTMvwRywviUKaeluimhY79zeH&count=10')
      .pipe(
        delay(1500),
        catchError(this.errorHandle.bind(this))
      )
  }


  private errorHandle(error: HttpErrorResponse){
    this.errorService.hande(error.message)
    return throwError(()=> error.message)
  }
}