import { Component } from '@angular/core';
import { Producto } from '../../types/productos.types';
import { ProductosService } from '../../add-product';

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

  // Inyección del servicio en el constructor
  constructor(private productosService: ProductosService) {}

  // Getter para acceder a los productos del servicio
  get productos(): Producto[] {
    return this.productosService.obtenerProductos();
  }

  agregarProducto() {
    const nuevoProducto: Producto = {
      nombre: this.nombreInput,
      precio: this.precioInput,
      descripcion: this.descripcionInput,
      stock: this.stockInput
    };

    // Usar el servicio para agregar el producto
    this.productosService.agregarProducto(nuevoProducto);

    // Limpiar los inputs
    this.nombreInput = '';
    this.precioInput = 0;
    this.descripcionInput = '';
    this.stockInput = 0;
  }

  eliminarProducto(producto: Producto | null) {
    if (producto) {
      // Usar el servicio para eliminar el producto
      this.productosService.eliminarProducto(producto);
    }
  }
}
