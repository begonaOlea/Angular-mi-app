import { Injectable } from '@angular/core';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private logeado: boolean = false;

  constructor() { }

   public login(): void {
       this.logeado =  !this.logeado;
   }

   public getEstaLoeado(): boolean {
     return this.logeado;
   }
}
