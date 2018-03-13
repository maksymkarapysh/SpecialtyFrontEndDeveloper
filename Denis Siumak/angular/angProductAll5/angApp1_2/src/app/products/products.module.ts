import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    ProductsComponent, 
    ProductsDetailComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
