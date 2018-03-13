import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Product[];

  constructor(
    private products: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.route.params.forEach( (params: Params) => { 
      this.products
      .getProductsList()
      .then(result => this.productsList = result);
    })
  }

  onSelect(selected: Product) {
    this.router.navigate(["products", selected.id]);
  }
}
