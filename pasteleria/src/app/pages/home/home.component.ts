/*import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}*/

import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  productosConDescuento = [
    { name: "Croissant", description: "Delicioso croissant relleno de crema", price: 5, img: "assets/img/croissant.jpg" },
    { name: "Concha", description: "Suave pan dulce con un toque de chocolate", price: 5, img: "assets/img/concha.jpg" },
    { name: "Trenza", description: "Trenza de pan con azúcar", price: 5, img: "assets/img/trenza.jpg" }
  ];

}

