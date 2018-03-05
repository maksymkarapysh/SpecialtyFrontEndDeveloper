import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Product } from "../product";
import { PRODUCTS } from "../products";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products = PRODUCTS;
  
  public productId: number;
  public productName: string;
  public productPrice: number;
  public productCategory: string;

  @Input() rows: number = this.products.length;

  @Output("onAddProduct") productEmitter = new EventEmitter<Product> ();

  constructor() { }

  ngOnInit() {
    console.log(this.rows);
    this.addProduct();
  }

  addProduct() {
    
    this.productEmitter.emit({
      id: this.productId,
      name: this.productName,
      price: this.productPrice,
      category: this.productCategory
    });
    this.productId = ++this.rows;
    this.productName = '';
    this.productPrice = 0;
    this.productCategory = "Category 1";
  }

}
