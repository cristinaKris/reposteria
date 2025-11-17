import { Component, Input } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-ventana-producto',
  imports: [],
  templateUrl: './ventana-producto.component.html',
  styleUrl: './ventana-producto.component.scss'
})
export class VentanaProductoComponent {
  //@Input() producto:Producto;
  name:string = "";
  description:string = "";
  price:number = 0.00;
  image:string = "";

  constructor(private dialogRef:MatDialogRef<VentanaProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){
    this.name = data.name;
    this.description = data.descripcion;
    this.price = data.price;
    this.image = data.imagen;
  }

  // onSubmit(){
  //   this.dialogRef.close({name: this.name, price: this.price, description: this.description, image: this.image});
  // }

  onClose(){
    this.dialogRef.close();
  }

}
