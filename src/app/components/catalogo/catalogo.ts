import { Component } from '@angular/core';
import { Producto } from '../../types/productos.types';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class Catalogo {
  nombreInput: string = '';
  precioInput: number = 0;
  descripcionInput: string = '';
  stockInput: number = 0;



  productos: Producto[] = [
    {
      nombre: "Teclado",
      precio: 50000,
      descripcion: "Teclado Logitech 20234",
      stock: 50
    },
    {
      nombre: "Mouse",
      precio: 15000,
      descripcion: "Mouse inalámbrico Logitech MX Master 3",
      stock: 100
    },
    {
      nombre: "Monitor",
      precio: 150000,
      descripcion: "Monitor Samsung Curvo 27 pulgadas",
      stock: 30
    },
    {
      nombre: "Laptop",
      precio: 1200000,
      descripcion: "Laptop Dell XPS 15, procesador i7",
      stock: 20
    },
    {
      nombre: "Auriculares",
      precio: 45000,
      descripcion: "Auriculares inalámbricos Sony WH-1000XM4",
      stock: 70
    },
    {
      nombre: "Cámara Web",
      precio: 25000,
      descripcion: "Cámara web Logitech C920 HD Pro",
      stock: 40
    },
    {
      nombre: "Tablet",
      precio: 300000,
      descripcion: "Tablet Samsung Galaxy Tab S6",
      stock: 15
    },
    {
      nombre: "Disco Duro Externo",
      precio: 80000,
      descripcion: "Disco duro externo Seagate 1TB",
      stock: 60
    },
    {
      nombre: "Smartphone",
      precio: 500000,
      descripcion: "Smartphone Samsung Galaxy S21",
      stock: 50
    },
    {
      nombre: "Mochila para Laptop",
      precio: 20000,
      descripcion: "Mochila Samsonite para laptop 15 pulgadas",
      stock: 80
    }
  ]


  agregarProducto() {
    const nuevoProducto: Producto = {
      nombre: this.nombreInput,
      precio: this.precioInput,
      descripcion: this.descripcionInput,
      stock: this.stockInput
    };

    this.productos.push(nuevoProducto);

    this.nombreInput = '';
    this.precioInput = 0;
    this.descripcionInput = '';
    this.stockInput = 0;
  }

  eliminarProducto(producto: Producto | null) {
    if (producto) {
      const index = this.productos.findIndex(p => 
        p.nombre === producto.nombre && 
        p.precio === producto.precio && 
        p.descripcion === producto.descripcion
      );
      if (index > -1) {
        this.productos.splice(index, 1);
      }
    }
  }
}
