import { Product } from "./product";

export interface User{

    id: number,
    firstname: String,
    lastname: String,
    email: String,
    password: String, 
    shipping_address: String,
    billing_address: String,
    phone: String,
    balance: number,
    cart: Product[]
}

/* The models on the front end will mimic their counterparts on the backend. 
   The names of the fields need to be the same as the ones on the backend. 
   This is because these fields are referencing specific columns within the tables 
   of the database on the backend. */