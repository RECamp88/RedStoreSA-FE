import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exclusive-offer',
  templateUrl: './exclusive-offer.component.html',
  styleUrls: ['./exclusive-offer.component.css']
})
export class ExclusiveOfferComponent{
  products: Product[] = [];

  product?: Product;

 
  constructor(private productService : ProductService, private router : Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(products => this.products = products.slice(0,1));
  }

  setProduct(id:number): void {
    //passing in the indexOfProduct from template
    this.product=this.products[id];
    this.productService.setProduct(this.product);    
    console.log(this.product);
  }
  
  goToSingleItem() {
    this.router.navigateByUrl('/product');
  }
}
