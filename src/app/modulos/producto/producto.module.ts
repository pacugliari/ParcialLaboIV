import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { AltaProductoComponent } from 'src/app/components/alta-producto/alta-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { TablaProductosComponent } from 'src/app/components/tabla-productos/tabla-productos.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';
import { DetalleProductoComponent } from 'src/app/components/detalle-producto/detalle-producto.component';
import { ListadoPublicoComponent } from 'src/app/components/listado-publico/listado-publico.component';



@NgModule({
  declarations: [
    AltaProductoComponent,
    TablaPaisesComponent,
    TablaProductosComponent,
    ProductosComponent,
    DetallePaisComponent,
    DetalleProductoComponent,
    ListadoPublicoComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductoModule { }
