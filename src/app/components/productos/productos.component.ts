import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/models/pais';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
  productoSeleccionado : Producto = new Producto();
  paisSeleccionado : Pais = new Pais();

  constructor(private router : Router){
  }


  mostrar(event:any){
    this.productoSeleccionado = event;
    //console.log(event);
    this.paisSeleccionado = event.pais;
  }
}
