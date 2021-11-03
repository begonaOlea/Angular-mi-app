import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { LoginComponent } from './login/login.component';
import { MiCanActivateLoginService } from './servicios/mi-can-activate-login.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lista', component: ListaProductosComponent },
  { path: 'alta', component: AltaProductoComponent, canActivate: [MiCanActivateLoginService] },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MiRoutingModule { }
