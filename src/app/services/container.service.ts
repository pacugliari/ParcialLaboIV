import { Injectable } from '@angular/core';
import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore';
import { firestore } from 'src/main';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  containers : Array<Container> = [];
  constructor() { }

  agregarContainer (container:any) {
    const ref = collection(firestore,'container');
    return addDoc(ref,container);
  }

  async borrarContainers(container: Container){
    let retorno = false;
    const usuarioRef = collection(firestore,'container');
      console.log(container.id)
      const documento = doc(usuarioRef,container.id)
      await deleteDoc(documento)
        .then((respuesta)=>{
          retorno = true;
        })
        .catch((error) => {
      });
      return retorno;
  }

  async modificarContainers(container: any){
    let retorno = false;
    const usuarioRef = collection(firestore,'container');
      const documento = doc(usuarioRef,container.id)
      await updateDoc(documento,{
          color: container.color,
          empresa  : container.empresa,
          capacidad : container.capacidad
        })
        .then((respuesta)=>{
          retorno = true;
        })
        .catch((error) => {
      });
      return retorno;
  }

  
  async getContainers() {
    const querySnapshot = await getDocs(collection(firestore, "container"));
    this.containers = [];
    querySnapshot.forEach((doc) => {
      let container = doc.data() as any;
      container.id = doc.id;
      this.containers.push(container)
    });
    return this.containers;
  }
}
