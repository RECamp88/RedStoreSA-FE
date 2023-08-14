import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
 
  products: any;

  selectedProduct: Product = {
    id: 0,
    name: '',
    dept: '',
    description: '',
    price: 0,
    quantity: 0,
    img: ''
  };
  
  constructor(private productService: ProductService, private router : Router) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.productService.getAllProducts().subscribe(json => {this.products = json; console.log(this.products)});
  }

  setProduct(id:number): void {
    //passing in the indexOfProduct from template
    this.selectedProduct=this.products[id];
    console.log(this.selectedProduct);
  }
  
  goToSingleItem() {
    this.router.navigate(['/product']);
  }

}
