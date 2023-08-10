import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  //creates an array of products when getting all products
  products : Product[] = [];

  // this sets a default variable for the endpoints
  // this was done to make it easy to update when changing where it is deployed
  ev = "http://localhost:9000";

  //get a list of all products
  getAllProducts() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/products/all`, { headers : header});
  }

  //gets a product by its id number
  getProductByID(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/products/${id}`, {headers : header});

  }
}
