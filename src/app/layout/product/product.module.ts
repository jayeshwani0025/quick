import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutes } from './product-routing.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ProductRoutes]
})
export class ProductModule { }
