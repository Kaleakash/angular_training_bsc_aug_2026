import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:Array<Product> = []; // use to store the rest api products. 

  constructor(private productService: ProductService) { }

  loadProducts() : void {
      this.productService.getAllProducts().subscribe((data:any) => {
        this.products = data.products;
      });

  }
}
