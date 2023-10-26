import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input() producto!: Producto;

  constructor() { }

  // Método para calcular el porcentaje de descuento
  calcularPorcentajeDescuento(precio: number, descuento: number): string {
    const porcentaje = ((precio - descuento) / precio) * 100;
    return `-${porcentaje.toFixed(2)}%`;
  }
}
