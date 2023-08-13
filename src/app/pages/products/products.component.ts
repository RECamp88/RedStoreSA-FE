import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: any;

  product: Product = {
    id: 0,
    name: '',
    dept: '',
    description: '',
    price: 0,
    quantity: 0,
    img: ''
  };
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.productService.getAllProducts().subscribe(json => {this.products = json; console.log(this.products)});
  }

  setProduct(id:number): void {
    this.product=this.products[id];
    console.log(this.product);
  }

}
