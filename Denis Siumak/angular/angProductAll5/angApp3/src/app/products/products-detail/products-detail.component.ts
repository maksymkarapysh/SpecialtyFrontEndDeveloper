import { Component, OnInit } from '@angular/core';

import { Location } from "@angular/common";
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  private product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct()
    console.log(this.route.snapshot.params['id']);
    
  }
  getProduct(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params["id"];
      this.productsService.getProduct(id)
        .then(product => this.product = product);
    });
  }
}
