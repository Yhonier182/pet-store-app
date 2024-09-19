
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  

  carrito: any[] = [];
  addToCart(producto: any) {
    const productoExistente = this.carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      this.carrito.push({ ...producto });
    }
    console.log('Producto añadido al carrito:', producto);
    console.log('Carrito actual:', this.carrito);
  }
  




  public productos: any[] = [];

  constructor(
    private apiService: ApiService,
   
  ) { }

  ngOnInit(): void {
      this.apiService.getProducts()
        .subscribe(res => {
          this.productos = res;
        });
  }



}




