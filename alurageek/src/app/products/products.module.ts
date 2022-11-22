import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent, NewProductComponent, ProductListComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductComponent, NewProductComponent, ProductListComponent],
})
export class ProductsModule {}
