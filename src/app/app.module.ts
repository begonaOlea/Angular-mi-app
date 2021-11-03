import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { LoginService } from './servicios/login.service';
import { ProductosService } from './servicios/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { PruebasObservableComponent } from './pruebas-observable/pruebas-observable.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DataService } from './servicios/data.service';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { LoginComponent } from './login/login.component';
import { MiRoutingModule } from './routing.module';
import { AutenticacionService } from './servicios/autenticacion.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiAnimacionComponent } from './mi-animacion/mi-animacion.component';
import { SaludoComponent } from './saludo/saludo.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleProductoComponent,
    PruebasObservableComponent,
    ListaProductosComponent,
    AltaProductoComponent,
    LoginComponent,
    MiAnimacionComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MiRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, ProductosService, DataService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
