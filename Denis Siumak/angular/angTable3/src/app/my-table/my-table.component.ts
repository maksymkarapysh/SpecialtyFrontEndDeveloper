import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Product } from "../product";
import { PRODUCTS } from "../products";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {
  products = PRODUCTS;
  public selectedProducts: Product[];

  constructor() {
    
   }

  ngOnInit() {
    this.selectedProducts = this.products;
  }

  onSelect(val: string): void {
    if (val) {
      this.selectedProducts = this.products.filter(item => val === item.category);
    } else {
      this.selectedProducts = this.products;
    }
  }

  updateProducts(product: Product) {
    this.products.push(product);
    console.log(product);
  }
}
