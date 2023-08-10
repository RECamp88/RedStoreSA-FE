import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  // this defines a user based off of the model
  user: User = {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    shipping_address: "",
    billing_address: "",
    phone: "",
    balance: 0,
    cart: []
  };

  // this sets a default variable for the endpoints
  // this was done to make it easy to update when changing where it is deployed
  ev = "http://localhost:9000";

  // this registers a new user
  postRegister(user : User) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<User>(`${this.ev}/user/register`, user, {headers : header});
  }

  //this logs in an existing user
  postLogin(user : User) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<User>(`${this.ev}/user/login`, user, {headers : header});
  }

  //this udpates an existing user's information
  updateUser(user : User) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.patch<User>(`${this.ev}/user/update`, 
      { firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        shipping_address: user.shipping_address,
        billing_address: user.billing_address,
        phone: user.phone}, 
      {headers : header});
  }

  //this deletes an existing user
  deleteUser(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.delete(`${this.ev}/user/delete/${id}`, {headers : header});
  }

  //this get a user by their id
  getUserById(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/user/${id}`, {headers : header});
  }
}

/* Although on my backend the shopping cart and user are all under userService and userController, 
   for ease of understanding, I decided to separate them out on the front end.  All services regarding
   the shopping cart will be under the shopping service. Where as, all the services regarding the creating, logging in, updating, retrieving 
   a particular user, and deleting a user remains in the user service. */