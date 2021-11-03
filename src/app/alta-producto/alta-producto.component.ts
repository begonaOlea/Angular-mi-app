import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosBaseDatos } from '../entidades/productosbasedatos';
import { DataService } from '../servicios/data.service';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {


  producto: ProductosBaseDatos;

  constructor(private datosService: DataService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

    this.producto = {
      idProducto: form.value.id,
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      categoria: '',
      precioUnitario: form.value.precioUnitario,
      condiciones: '',
      fabricante: '',
      unidadesEnPedido: 0,
      unidadesEnStock: 0

    }
    console.log(JSON.stringify(this.producto));
      
    this.datosService.createProduct(this.producto).subscribe(
        (pNuevo) => { console.log('Nuevo es ' + JSON.stringify(pNuevo)); },
        (error) => { console.log('Error....' + JSON.stringify(error)) }
    );
    
    form.reset();
  }

}
