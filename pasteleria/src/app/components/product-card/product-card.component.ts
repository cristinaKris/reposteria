import { Component, Input } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { VentanaProductoComponent } from '../ventana-producto/ventana-producto.component';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() imagen:string = "assets/img/tartaKiwi.png";
  @Input() name:string = "Producto Ejemplo";
  @Input() descripcion:string = "Descripción del producto ejemplo.";
  @Input() price:number = 9.99;

  constructor(private dialogRef: MatDialog){}

  //VentanaProductoComponent
  seeProduct(){
    const dialogRef = this.dialogRef.open(VentanaProductoComponent,{
      width: '600px',
      height: '700px',
      data: {
        imagen: this.imagen,
        name: this.name,
        descripcion: this.descripcion,
        price: this.price
      },
      disableClose: false,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.addToCart();      
      }
    });

  }

  addToCart() {
    //Sustituir por id de producto para mostrar en carrito
    console.log(`${this.name} added to cart.`);
  }
}
