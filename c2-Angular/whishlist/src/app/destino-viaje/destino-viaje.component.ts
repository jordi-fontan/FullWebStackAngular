import { Component } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.sass']
})
export class DestinoViajeComponent {
  nombre: string;
  constructor(){
    this.nombre='por defecto te pongo este nombre';
  }

}
