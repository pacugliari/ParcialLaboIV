import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  @Input() producto?: Producto;
} 
