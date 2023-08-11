import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productName = this.route.snapshot.params['productName'];
  }
}
