import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  @Input() isOpen: boolean = false;   // ← necesario para el modal global
  @Output() close = new EventEmitter<void>(); // ← necesario para cerrar desde afuera
  
  // NUEVO → controlar si el usuario está logeado
  @Input() isLoggedIn: boolean = false;

  // NUEVO → notificar cuando se cierre sesión
  @Output() logout = new EventEmitter<void>();

  username: string = '';
  password: string = '';

  closeModal() {
    this.close.emit(); // ← Notifica al app.component.html que debe cerrar
  }


  constructor(private router: Router) {}

  irCrearCuenta() {
  this.closeModal();
  this.router.navigate(['/registro']);
  }

  iniciarSesion() {
    if (this.username === 'test' && this.password === '1234') {
      this.isLoggedIn = true;
    }
  }

  cerrarSesion() {
    this.isLoggedIn = false;
    this.logout.emit();   // avisar al componente padre
  }
}


