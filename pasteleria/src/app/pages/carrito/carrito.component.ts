import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistentePasosComponent } from '../../components/asistente-pasos/asistente-pasos.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-carrito',
  imports: [CommonModule,AsistentePasosComponent, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  mostrarProductos=true;
  eleccionMP = false;
  eleccionPickUp = false;
  eleccionDomicilio = false;
  eleccionPaypal = false;
  direccionEntrega="direccion para enviar";
  pasoActual = 1;
  pasos = [
    { valor: 1, titulo: 'Agendar pedido' },
    { valor: 2, titulo: 'Forma de entrega' },
    { valor: 3, titulo: 'Forma de pago' },
    { valor: 4, titulo: 'Resumen' },
    { valor: 5, titulo: 'Seguimiento'}
  ];

  status = [
    'Pedido recibido',
    'En proceso de elaboración',
    'Listo para la entrega',
    'Enviado',
    'Entregado'
  ];

  statusActivo = 3; // índice del paso actual (0-based)

  cambiarPaso(p: number) {
    this.pasoActual = p;
  }

  
  total: number = 0;

  productos = [
    { 
      id: 1,
      nombre: 'Tarta de Kiwi', 
      precio: 10.99, 
      cantidad: 1,
      imagen: "assets/img/tartas/tartaKiwi.png"
    },
    { id : 2,
      nombre: 'Concha Bicolor', 
      precio: 8.50, 
      cantidad: 1,
      imagen: 'assets/img/panes/conchaBicolor.jpg'
    },
    { 
      id : 3,
      nombre: 'Pastel de Doble Chocolate', 
      precio: 12.00, 
      cantidad: 1,
      imagen: 'assets/img/pasteles/dobleChocolate.png'
    },
    { 
      id : 4,
      nombre: 'Pan de frambuesa', 
      precio: 9.25, 
      cantidad: 1,
      imagen: 'assets/img/panes/frambuesa.jpg'
    },
    { 
      id : 5,
      nombre: 'Tarta navideña edición 2', 
      precio: 11.50, 
      cantidad: 1,
      imagen: 'assets/img/tartas/navideña2.jpg'
    }
  ];

  subtotal(precio:number,cantidad:number){
    return precio * cantidad;
  }

  addUnit(id:number){
    const prod = this.productos.find(p => p.id === id);
    if (prod) prod.cantidad++;
  }

  removeUnit(id:number){
    const prod = this.productos.find(p => p.id === id);
    if (prod && prod.cantidad>0) prod.cantidad--;
  }

  eliminar(){
    
  }
  calculaTotal(){
    let total = 0;
    for (let p of this.productos){
      total += p.precio * p.cantidad;
    }
    this.total = Number(total.toFixed(2));  
    return Number(total.toFixed(2));  
  }


  iniciarPago(){
    this.mostrarProductos=false;
    this.pasoActual=1;
  }

  datos = {
    nombre: '',
    fecha: ''
  };

  guardar(form: any) {
    console.log('Datos enviados:', this.datos);
    console.log('Estado del formulario:', form);
    this.cambiarPaso(2);
  }

  agendar(){

  }
  pickUp(){
    this.cambiarPaso(3);
    this.eleccionPickUp=true;
  }

  domicilio(){
    this.cambiarPaso(3)
    this.eleccionDomicilio=true;
  }

  pagarPaypal(datosCliente: any) {
    console.log("Datos enviados a PayPal:", datosCliente);

    // Aquí llamas a tu backend para crear la orden de PayPal
    // this.apiService.crearOrdenPaypal(datosCliente).subscribe(...)
  }

  pagarMP(datosCliente: any) {
    console.log("Datos enviados a MercadoPago:", datosCliente);

    // Aquí llamas a tu backend para crear la preferencia de MercadoPago
    // this.apiService.crearPreferenciaMP(datosCliente).subscribe(...)
  }

  confirmar(){
    this.cambiarPaso(5)
  }
  

}
