import { Injectable } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  agregarProducto (repartidor:any) {
    const ref = collection(firestore,'productos2');
    return addDoc(ref,repartidor);
  }
}
