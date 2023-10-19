import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Input() paises : Pais[] = [];
  @Input() mostrarSeleccionar : boolean = true;
  @Input() cargarPaises : boolean = true;
  @Output() eventPaisSeleccionado = new EventEmitter<Pais>();
  
  constructor(private paisesService: PaisService,private router:Router){
  }

  async ngOnInit(){
    if(this.cargarPaises){
      this.paisesService.TraerPaises().then((respuesta)=>{
        this.paises =  respuesta;
      });
    }
  }

  seleccionar(pais : Pais){
    this.router.navigate(["producto/alta"]);
    //console.log(pais);
    this.eventPaisSeleccionado.emit(pais);
  }
}
