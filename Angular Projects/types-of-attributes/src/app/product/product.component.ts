import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [

    {
      id:101,
      name:'Apple iPhone 16 Pro',
      price:125000,
      discount:15,
      rating:4.8,
      stock:true,
      image:'assets/iphone.png'
    },

    {
      id:102,
      name:'Samsung Galaxy S25',
      price:95000,
      discount:10,
      rating:4.6,
      stock:false,
      image:'assets/samsung.png'
    },

    {
      id:103,
      name:'Sony Headphones',
      price:18000,
      discount:25,
      rating:4.5,
      stock:true,
      image:'assets/headphone.png'
    },

    {
      id:104,
      name:'Apple MacBook Pro',
      price:195000,
      discount:0,
      rating:4.9,
      stock:true,
      image:'assets/macbook.png'
    }

  ];

  addToCart(product:any){

      alert(product.name + " Added Successfully");

  }
}
