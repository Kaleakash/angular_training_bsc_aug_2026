import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "https://dummyjson.com/products";
  // DI for HttpClient
  constructor(private http:HttpClient) { }

  // get all products
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  
}
