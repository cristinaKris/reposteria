import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
@Component({
  selector: 'app-catalogo',
  imports: [ProductCardComponent, CarrouselComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  
}
