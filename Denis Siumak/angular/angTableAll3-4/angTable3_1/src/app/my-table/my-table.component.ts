import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Product } from "../product";
//import { PRODUCTS } from "../products";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {
  private products: Array<Product>;

  @Input() rows: number;

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
   }

  ngOnInit() {
    this.getRows(this.rows);
  }
  getRows(rows:number) {
    this.products.length = rows || this.products.length;
  }
}
