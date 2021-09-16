import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeado: boolean;

  constructor(private autService: AutenticacionService) { }

  ngOnInit() {
    this.logeado = this.autService.getEstaLoeado();
  }

  onLogin() {
     this.autService.login();
     this.logeado = this.autService.getEstaLoeado();
  }

}
