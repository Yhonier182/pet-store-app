import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    // Implementa la lógica para obtener productos
    return this.http.get<any[]>(`http://localhost:8000/products`);


  }
}


