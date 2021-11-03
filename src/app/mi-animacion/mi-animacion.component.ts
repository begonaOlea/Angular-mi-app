import { Component, OnInit } from '@angular/core';
import{
  trigger,
  state,
  style,
  animate,
  transition 
}from'@angular/animations';

@Component({
  selector: 'app-mi-animacion',
  templateUrl: './mi-animacion.component.html',
  styleUrls: ['./mi-animacion.component.css'],
  animations: [
  trigger('sizeAnimation', [
    state('small', style({
      transform: 'scale(1)',
      backgroundColor: 'green'
    })),
    state('large', style({
      transform: 'scale(1.4)',
      backgroundColor: 'red'
    })),
    transition('small => large', animate('100ms ease-in')),
    transition('large => small', animate('100ms ease-out'))
  ])
]
})
export class MiAnimacionComponent implements OnInit {

  estado: string= 'small';

  constructor() { }

  ngOnInit() {
  }

  public onCambio() {
     if( this.estado === 'small') {
       this.estado = 'large';
     }else {
      this.estado = 'small';
     }
  }


}
