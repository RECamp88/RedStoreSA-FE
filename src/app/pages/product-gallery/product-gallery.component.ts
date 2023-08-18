import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit{

  products: Product[] = [];

  product?: Product;

 
  constructor(private productService : ProductService, private router : Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(products => this.products = products);
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
