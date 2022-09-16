import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Contactus } from '../Models/Contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  
  path="http://localhost:3030/api/contact-us"
  constructor(private http:HttpClient) { }
  getContatcus():Observable<Contactus[]>{
    return this.http.get<Contactus[]>(this.path).pipe(
      tap(),
      catchError(this.handleError)

    );
  }
  handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage='There is a Problem: '+error.error.message
    }else{
      errorMessage="Systemical Error"
    }
    return throwError(errorMessage);
  }
}
