import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private route: ActivatedRoute) {}

  // what I want is for the name of the single product to be displayed in the path
  ngOnInit() {
    const productName = this.route.snapshot.params['productName'];
  }
}
