import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios:Usuario[] = [];

  constructor(private router:Router) {

  }

   async traerUsuariosBase() {
    const querySnapshot = await getDocs(collection(firestore,'usuarios'));
    querySnapshot.forEach((doc:any) => {
      let usuario = doc.data() as Usuario;
      this.listaUsuarios.push(usuario)
    });
  }

  obtenerUsuario(unUsuario:Usuario):boolean{
    let flag:boolean=false;
    this.listaUsuarios.forEach((usuario)=>{
      if(usuario.usuario===unUsuario.usuario && usuario.clave ===unUsuario.clave){
        localStorage.setItem('user',JSON.stringify(usuario))
        flag = true;
      }
    })
    return flag;
  }

  async logout(){
    localStorage.removeItem("user");
    this.router.navigate(['login'], { replaceUrl: true });
  }
}
