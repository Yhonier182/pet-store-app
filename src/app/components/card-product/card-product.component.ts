import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent  implements OnInit{

     cantidad: number =0 ;
     soldOut: boolean = false; //variable creada

  // inicio objecto  de producto
  Product = {
    name :'Bike',
    price :120,
    inventory :10,
    image :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
   
  }

  

  // fin objeto de producto 
  //creamos el constructor
  constructor(){}
    ngOnInit(){}
    

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
