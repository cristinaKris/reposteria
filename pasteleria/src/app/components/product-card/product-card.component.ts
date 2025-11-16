import { Component, Input } from '@angular/core';
import{MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() imagen:string = "assets/img/tartaKiwi.png";
  @Input() name:string = "Producto Ejemplo";
  @Input() descripcion:string = "Descripción del producto ejemplo.";
  @Input() price:number = 9.99;

  

  addToCart() {
    //Sustituir por id de producto para mostrar en carrito
    console.log(`${this.name} added to cart.`);
  }
}
