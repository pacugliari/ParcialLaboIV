import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'producto', loadChildren: () => import('./modulos/producto/producto.module').then(m => m.ProductoModule) },
  { path: '**', component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
