import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../types/productos.types';

@Component({
  selector: 'app-boton-eliminar',
  standalone: false,
  templateUrl: './boton-eliminar.html',
  styleUrl: './boton-eliminar.scss'
})
export class BotonEliminar {
  @Input() producto: Producto | null = null;
  @Output() eliminar = new EventEmitter<Producto>();

  
  eliminarProducto(){
    if (this.producto) {
      this.eliminar.emit(this.producto);
    }
  }
}
