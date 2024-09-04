import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{
// creacion del Input que recibe del compoente padre el array de productos
  @Input() Product = {
    name: '',
    price: 0,
    description: '',
    inventory: 0,
    image: ''
  };
  
  cantidad: number = 0;
  soldOut: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    if(this.cantidad < this.Product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }

  removeProduct() {
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }

}
