import { Component } from '@angular/core';
import { AsistentePasosComponent } from '../../../components/asistente-pasos/asistente-pasos.component';
import { timeout } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-personalizar-pastel',
  imports: [AsistentePasosComponent, CommonModule],
  templateUrl: './personalizar-pastel.component.html',
  styleUrl: './personalizar-pastel.component.scss'
})
export class PersonalizarPastelComponent {
  constructor(private dialogRef: MatDialogRef<PersonalizarPastelComponent>){}
  pasos =[
    {valor: 1, titulo:"Tamaño"},
    {valor: 2, titulo:"Sabor"},
    {valor: 3, titulo:"Relleno"},
    {valor: 4, titulo:"Decoración"},
    {valor: 5, titulo: "Resumen"}
  ];
  sizes=["Pequeño", "Mediano", "Grande"];
  sabores=["Chocolate", "Matcha", "Zanahoria"];
  rellenos=["Crema de cacahuate", "Durazno", "Ganache de chocolate"];
  decoraciones=["Figuras de Fondant", "Mirror Glaze", "Flore snarurales comestibles"];
  asistente=false;

  imagen:string = "assets/img/decoracion3.png";

  pasoActual=1;
  cambiarPaso(p: number) {
    this.pasoActual = p;
  }
  onClose(){
    this.dialogRef.close();
  }

  size(size:string){
      this.cambiarPaso(2);
  }
  
  sabor(sabor:string){
    this.cambiarPaso(3);
  }

  relleno(relleno:string){
    this.cambiarPaso(4);
  }

  decoracion(deco:string){
    this.cambiarPaso(5);
  }

  finalizar(){
    this.dialogRef.close();
  }


}
