import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContainerService } from 'src/app/services/container.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent {
  esValidoPeso : boolean = false;
  @Output() actualizar = new EventEmitter<boolean>(); 
  
  formContainer = this.formBuilder.group({
    codigo: ['', [Validators.required]],
    capacidad: ['', [Validators.required]],
    color: ['',[Validators.required]],
    empresa: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private containerService: ContainerService){

  }

  limpiarForm(){
    this.formContainer.reset();
  }

  alta(){
    if(this.formContainer.valid){
      let data = {
        codigo: this.formContainer.value.codigo,
        capacidad: this.formContainer.value.capacidad,
        color: this.formContainer.value.color,
        empresa: this.formContainer.value.empresa,
      }
      this.containerService.agregarContainer(data)
        .then((respuesta)=>{
          Swal.fire("","Container se guardado de manera correcta","success")
          this.actualizar.emit(true);
        })
        .catch((error)=>{
          Swal.fire("","Error al guardar el container","error")
          console.log(error);
        })
      this.formContainer.reset();
    }
  }

}
