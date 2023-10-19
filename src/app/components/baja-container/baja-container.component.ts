import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja-container',
  templateUrl: './baja-container.component.html',
  styleUrls: ['./baja-container.component.css']
})
export class BajaContainerComponent {
  @Input() container ?: Container;
  @Output() actualizar = new EventEmitter<boolean>(); 

  constructor(private containerService:ContainerService){

  }
  
  limpiarForm(){
    if(this.container?.codigo)
      this.container.codigo = "";
  }

  borrar(){
    if(this.container?.codigo){
      this.container.codigo = "";
      this.containerService.borrarContainers(this.container)
        .then((result)=>{
          if(result){
            Swal.fire("","Container borrado de manera correcta","success");
            this.actualizar.emit(true);
          }else{
            Swal.fire("ERROR","El container no se pudo borrar","error");
          }
        })
    }
  }
}
