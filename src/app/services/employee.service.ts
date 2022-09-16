import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Employee } from '../Models/Employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  path="http://localhost:3030/api/employees"
  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.path).pipe(
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
  deleteEmployees(employee:Employee):Observable<Employee>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    return this.http.delete<Employee>(this.path+"/"+employee.id,httpOptions).pipe(
      tap(),
      catchError(this.handleError)

    );
  }
}
