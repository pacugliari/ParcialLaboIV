import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { AltaProductoComponent } from 'src/app/components/alta-producto/alta-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';



@NgModule({
  declarations: [
    AltaProductoComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductoModule { }
