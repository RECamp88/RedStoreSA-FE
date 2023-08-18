import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  products: Product[] = [];

  product?: Product;

 
  constructor(private productService : ProductService, private router : Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(products => this.products = products.slice(1,5));
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
