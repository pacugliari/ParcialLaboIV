import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { firestore } from 'src/main';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos : Array<Producto> = [];

  constructor() { }

  agregarProducto (repartidor:any) {
    const ref = collection(firestore,'productos2');
    return addDoc(ref,repartidor);
  }

  async getProductos() {
    const querySnapshot = await getDocs(collection(firestore, "productos2"));
    this.productos = [];
    querySnapshot.forEach((doc) => {
      let producto = doc.data() as any;
      if(producto.pais)
      producto.pais = JSON.parse(producto.pais);
      this.productos.push(producto)
    });
    return this.productos;
  }
}
