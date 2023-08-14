import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product : Product = {
    id: 0,
    name: "",
    dept: "",
    description: "",
    price: 0,
    quantity: 0,
    img: ""
  }

  selectedProduct : any;

  uid : number = this.userService.userInfo.id;
  balance: any = this.userService.userInfo.balance;

  constructor (private productService : ProductService, private userService : UserService, private shoppingService : ShoppingService){}

 /*  ngOnInit(): void {
    this.productService.getProductByID(this.product.id).subscribe(json => {
      this.selectedProduct = json;
      console.log(this.selectedProduct);
    });
  } */
  addToCart(uid: number, pid: number) {
    this.shoppingService.addToCart(uid, pid).subscribe(json => {
      this.selectedProduct=json;
      console.log(this.selectedProduct);
      this.balance= this.balance + this.selectedProduct.price;
      console.log(this.balance);
      this.userService.updateBalance(this.balance);
    });
  }
}
