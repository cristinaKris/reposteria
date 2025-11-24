import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-mi-perfil',
  standalone: true,          // ← FALTABA
  imports: [CommonModule, RouterModule], 
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent {
datosCliente = {
  nombre: "Maria Geovana",
  apellidos: "Garcia Luna",
  correo: "geoevama@gmail.com",
  celular: "5566717190",
  fechaNacimiento: "1997-07-02",
  direccion: "Calle Vírgenes 405, 07865, COL. PEDREGAL, CDMX"
};

}

