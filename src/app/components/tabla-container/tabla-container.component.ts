import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-tabla-container',
  templateUrl: './tabla-container.component.html',
  styleUrls: ['./tabla-container.component.css']
})
export class TablaContainerComponent {
  containeres : Array<Container> = [];
  @Input()  mostrarSeleccionar : boolean = true;
  @Output() eventContainerSeleccionada = new EventEmitter<Container>();
  
  constructor(private containerService:ContainerService){
  }

  async ngOnInit(){
    this.actualizar();
  }

  actualizar(){
    this.containerService.getContainers()
    .then((respuesta)=> {
      //console.log(respuesta)
      this.containeres = respuesta;
    });
  }

  seleccionar(container : Container){
    this.eventContainerSeleccionada.emit(container);
  }
}
