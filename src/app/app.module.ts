import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { LoginService } from './servicios/login.service';
import { ProductosService } from './servicios/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { PruebasObservableComponent } from './pruebas-observable/pruebas-observable.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DataService } from './servicios/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DetalleProductoComponent,
    PruebasObservableComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoginService, ProductosService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
