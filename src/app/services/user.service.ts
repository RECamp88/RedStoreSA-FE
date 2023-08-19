import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    id: 0,
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    shipping_address: '',
    billing_address: '',
    phone: '',
    balance: 0,
    cart: []
  };

  loggedIn : boolean = false;

  userInfo: any;
  loginEmail: any;
  loginPassword: any;

  constructor(private httpClient : HttpClient, private router : Router) { }

  getUser() : User {
    if(this.user === undefined){
      throw new Error("UserService.getUser: user is undefined");
    }
    return this.user;
  }

  setUser(user:User) {
    if (user === undefined) {
      throw new Error("UserService.setUser: user is undefined")
    }
    this.user=user;
  } 

  setAccount(user:User):void {
    this.user=user;
    this.loggedIn = true;
  }

  updateBalance(newBalance : number){
    this.userInfo.balance = newBalance;
  }
  
  setPassword(password : string){
    this.user.password = password;
  }
  
  setEmail(email : string){
    this.user.email = email;
  }

  verifyCredentials(user: User) : boolean {
    if (user.email == undefined) return false;
    if (user.password == undefined) return false;
   
    return true;
  }

  logout(): void {
    this.loggedIn = false;
    this.resetUserInfo();
  }

  login(user:User): void {
    console.log(user);

    let loginResponse : Observable<User> = this.postLogin(user);

    loginResponse.subscribe(json => {
      if(json.email == null){
        console.log(json);
        throw new Error("login(): Invalid credentials");
      }else {
        this.setUser(user);
        this.user = json;
        this.loggedIn = true;
      }
    })
    this.router.navigateByUrl('/account');
    // need to add additional statements to set the user for the cart
  }

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
    if (this.verifyCredentials(user) == false){
      throw new Error("Invalid credentials");
    }
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

  resetUserInfo() {
    this.userInfo = {
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      shipping_address: "",
      billing_address: "",
      phone: "",
      balance:0,
      cart: [] 
    }
  }
}

/* Although on my backend the shopping cart and user are all under userService and userController, 
   for ease of understanding, I decided to separate them out on the front end.  All services regarding
   the shopping cart will be under the shopping service. Where as, all the services regarding the creating, logging in, updating, retrieving 
   a particular user, and deleting a user remains in the user service. */