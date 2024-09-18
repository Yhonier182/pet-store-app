
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
addToCart($event: any) {
throw new Error('Method not implemented.');
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




