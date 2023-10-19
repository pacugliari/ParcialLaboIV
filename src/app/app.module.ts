import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ListadoPublicoComponent } from './components/listado-publico/listado-publico.component';
import { ContainerComponent } from './components/container/container.component';
import { AltaContainerComponent } from './components/alta-container/alta-container.component';
import { BajaContainerComponent } from './components/baja-container/baja-container.component';
import { ModificarContainerComponent } from './components/modificar-container/modificar-container.component';
import { TablaContainerComponent } from './components/tabla-container/tabla-container.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    MenuComponent,
    ContainerComponent,
    AltaContainerComponent,
    BajaContainerComponent,
    ModificarContainerComponent,
    TablaContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
