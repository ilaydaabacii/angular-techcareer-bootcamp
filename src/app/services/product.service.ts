import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/Products';
import { Observable,throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators'
@Injectable()
export class ProductService {
  path="http://localhost:3030/api/products"
  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.path).pipe(
      tap(),
      catchError(this.handleError)

    );
  }

  updateProducts(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    console.log(product.id)
    return this.http.put<Product>(this.path+"/"+product.id,product,httpOptions).pipe(
      tap(),
      catchError(this.handleError)

    );
  }
  deleteProducts(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    return this.http.delete<Product>(this.path+"/"+product.id,httpOptions).pipe(
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
