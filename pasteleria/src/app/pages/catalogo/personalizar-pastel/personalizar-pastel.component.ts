import { Component } from '@angular/core';
import { AsistentePasosComponent } from '../../../components/asistente-pasos/asistente-pasos.component';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-personalizar-pastel',
  imports: [],
  templateUrl: './personalizar-pastel.component.html',
  styleUrl: './personalizar-pastel.component.scss'
})
export class PersonalizarPastelComponent {
  pasos =[
    {valor: 1, titulo:"Tamaño"},
    {valor: 2, titulo:"Sabor"},
    {valor: 3, titulo:"Relleno"},
    {valor: 4, titulo:"Decoración"},
    {valor: 5, titulo: "Resumen"}
  ];

  pasoActual=1;
  cambiarPaso(p: number) {
    this.pasoActual = p;
  }

}
