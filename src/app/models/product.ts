export interface Product{
    id: number,
    name: String,
    dept: String,
    description: String,
    price: number,
    quantity: number, 
    img: String
}

/* The models on the front end will mimic their counterparts on the backend. 
   The names of the fields need to be the same as the ones on the backend. 
   This is because these fields are referencing specific columns within the tables 
   of the database on the backend. */