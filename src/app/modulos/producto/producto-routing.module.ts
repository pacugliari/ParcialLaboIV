import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from 'src/app/components/alta-producto/alta-producto.component';
import { ListadoPublicoComponent } from 'src/app/components/listado-publico/listado-publico.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'alta',
    component: AltaProductoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lista',
    component: ProductosComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'listadoPublico',
    component: ListadoPublicoComponent,
  },
  { path: '**', component: ProductosComponent,
  canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
