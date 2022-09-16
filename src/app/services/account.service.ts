import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../Models/loginUser';
import { UserRegister } from '../Models/registerUser';
@Injectable()
export class AccountService {
  pathLogin="http://localhost:3030/api/auth/login";
  pathRegister="http://localhost:3030/api/auth/register"
  loggedIn=false;
  userName:string;
  bodyRegister:UserRegister;
  tokenValue:string;
  constructor(private http:HttpClient) { }
  login(user:User):Observable<string>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': "Bearer "+sessionStorage.getItem("Token "+user.username)
      })
    }
    this.userName=user.username
    return this.http.post<string>(this.pathLogin,user,httpOptions).pipe(
      tap(),
      catchError(this.handleError)

    );
    
  }
  getUser(){
    return this.userName
  }
  Logged(){
    this.loggedIn=true;
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.clear()
    this.loggedIn=false;
  }
  register(user:UserRegister):Observable<string>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': "Token"
      })
    }
    console.log(user)
    return this.http.post<string>(this.pathRegister,user).pipe(
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
