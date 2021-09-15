import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosBaseDatos } from '../entidades/productosbasedatos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlBase: string = "http://127.0.0.1:8080/Proy0055_Spring_MVC-0.0.1-SNAPSHOT/rest/productos";

  constructor(private http:HttpClient) { }

  public getProductos(): Observable<ProductosBaseDatos[]>{
       return this.http.get<ProductosBaseDatos[]>(this.urlBase);
  }
}
