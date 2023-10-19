import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent {
  esValidoPeso : boolean = false;
  @Output() actualizar = new EventEmitter<boolean>(); 
  @Input() container ?: Container;
  
  formContainer = this.formBuilder.group({
    capacidad: ['', [Validators.required]],
    color: ['',[Validators.required]],
    empresa: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private containerService:ContainerService){

  }

  limpiarForm(){
    this.formContainer.reset();
  }

  valores(container:Container){
    if(container.capacidad && container.color && container.empresa ){
      this.formContainer.get("capacidad")?.setValue(String(container.capacidad));
      this.formContainer.get("color")?.setValue(String(container.color));
      this.formContainer.get("empresa")?.setValue(String(container.empresa));
    }

  }

  modificar(){
    if(this.formContainer.valid){
      let data = {
        id: this.container?.id,
        capacidad: this.formContainer.value.capacidad,
        color: this.formContainer.value.color,
        empresa: this.formContainer.value.empresa,
      }
      this.containerService.modificarContainers(data)
        .then((respuesta)=>{
          Swal.fire("","Container se modifico de manera correcta","success")
          this.actualizar.emit(true);
        })
        .catch((error)=>{
          Swal.fire("","Error al modificar container","error")
          console.log(error);
        })
      this.formContainer.reset();
    }
  }

}
