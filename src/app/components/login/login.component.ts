import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario : Usuario = new Usuario();

  constructor(private formBuilder:FormBuilder,private router:Router,private usuarioService:UsuarioService){

  }

  formLogin = this.formBuilder.group({
    usuario: ['', [Validators.required]],
    clave: ['', [Validators.required]],
  });

  async ngOnInit() {
    await this.usuarioService.traerUsuariosBase();
  }

  ingresar() {
    this.usuario.usuario=this.formLogin.value.usuario ? this.formLogin.value.usuario : "";
    this.usuario.clave = this.formLogin.value.clave  ? this.formLogin.value.clave : "";

    if(!this.usuarioService.obtenerUsuario(this.usuario)){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no autorizado',
        heightAuto: false
      })
     }else{
      this.router.navigate(['home'], { replaceUrl: true });
     }
  }


  admin(){
    this.formLogin.get("usuario")?.setValue("admin");
    this.formLogin.get("clave")?.setValue("admin");
  }

  empleado(){
    this.formLogin.get("usuario")?.setValue("empleado");
    this.formLogin.get("clave")?.setValue("empleado");
  }
}
