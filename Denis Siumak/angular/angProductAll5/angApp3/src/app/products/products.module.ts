import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsService } from './products.service';

import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent, 
    ProductsDetailComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
