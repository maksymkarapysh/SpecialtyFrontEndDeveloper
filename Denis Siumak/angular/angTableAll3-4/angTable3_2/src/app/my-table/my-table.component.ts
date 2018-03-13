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
  private products: Array<Product> = this.productsService.getProducts();
  public selectedProducts: Product[];
  @Input() rows: number;

  constructor(private productsService: ProductsService) {
    this.selectedProducts = this.products;
    
   }

  ngOnInit() {
    this.getRows(this.rows);
  }

  getRows(rows: number) {
    this.selectedProducts.length = rows || this.products.length;
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
    //console.log(product);
  }
}
