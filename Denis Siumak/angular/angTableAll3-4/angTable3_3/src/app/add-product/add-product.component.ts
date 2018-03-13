import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Product } from "../product";
//import { PRODUCTS } from "../products";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: Array<Product> = this.productsService.getProducts();
  
  @Input('indexProduct') index: number;
  public productName: string = '';
  public productPrice: number = 0;

  @Output("onAddProduct") productEmitter = new EventEmitter<Product> ();

  constructor(private productsService: ProductsService) {
    console.log(this.index);
  }

  ngOnInit() {
  }
  addProduct() {
    this.productEmitter.emit({
      id: this.index,
      name: this.productName,
      price: this.productPrice
    });
  }
}
