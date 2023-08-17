import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  product: any;
  uid : number = this.userService.userInfo.id;
  balance: any = this.userService.userInfo.balance;
  

  constructor(
    private productService : ProductService, 
    private userService : UserService, 
    private shoppingService : ShoppingService,
    private route: ActivatedRoute,
    private location: Location) {}
  
  getSingleProduct(id: number): void {
    this.productService.getProductByID(id).subscribe(selectedProduct => this.product = selectedProduct);
  }

  addToCart(uid: number, pid: number) {
    this.shoppingService.addToCart(uid, pid).subscribe(json => {
      this.product=json;
      console.log(this.product);
      this.balance=this.balance + this.product.price;
      console.log(this.balance);
      this.userService.updateBalance(this.balance);     
    });
  }
}
