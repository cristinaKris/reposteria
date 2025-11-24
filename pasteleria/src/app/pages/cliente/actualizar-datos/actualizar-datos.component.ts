import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-actualizar-datos',
  standalone: true, 
  imports: [RouterModule, FormsModule],
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.scss']
})
export class ActualizarDatosComponent {
datosCliente = {
    nombre: "Maria Geovana",
    apellidos: "Garcia Luna",
    correo: "geoevama@gmail.com",
    celular: "5566717190",
    fechaNacimiento: "1997-07-02",
    direccion: "Calle Vírgenes 405, 07865, COL. PEDREGAL, CDMX"
  };
  // Copia editable
  datosEditados = { ...this.datosCliente };

  modificarDatos() {
    // Actualiza los datos principales con lo editado
    this.datosCliente = { ...this.datosEditados };
    alert("Datos actualizados correctamente ✔️");
  }
}
