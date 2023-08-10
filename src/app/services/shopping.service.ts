import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private httpClient : HttpClient) { }

  //creates the shopping cart list
  cart : Product[] = [];

  ev = "http://localhost:9000";

  addToCart(uid: number, pid: number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post(`${this.ev}/user/${uid}/addProduct/${pid}`, {headers : header});
  }

  removeFromCart(uid: number, pid: number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post(`${this.ev}/user/${uid}/removeProduct/${pid}`, {headers : header});
  }

  emptyCart(uid: number){
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post(`${this.ev}/user/${uid}/emptyCart`, {headers : header});
  }
}

/* Although on my backend the shopping cart and user are all under userService and userController, 
   for ease of understanding, I decided to separate them out on the front end.  All services regarding
   the shopping cart will be under the shopping service. Where as, all the services regarding the creating, logging in, updating, retrieving 
   a particular user, and deleting a user remains in the user service. */

