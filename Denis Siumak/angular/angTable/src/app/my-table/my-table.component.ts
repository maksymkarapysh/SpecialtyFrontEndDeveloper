import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../product";
import { PRODUCTS } from "../products";
import { element } from 'protractor';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {
  private products = PRODUCTS;
  private idValue: number = 0;
  @Input() rows: number;

  constructor() { }

  ngOnInit() {
    this.products.length = this.rows || this.products.length;
  }
  @Output()
  del: EventEmitter<number> = new EventEmitter;

  delete(item: Product): void {
    this.products.forEach((elem, i) => {
      if (elem === item) {
        this.products.splice(i, 1);
        this.idValue = elem.id;
        this.del.emit(this.idValue);
      }
    });
  }
}
