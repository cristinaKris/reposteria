import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PersonalizarPastelComponent } from './personalizar-pastel/personalizar-pastel.component';

@Component({
  selector: 'app-catalogo',
  standalone:true,
  imports: [ProductCardComponent, CommonModule,CarrouselComponent,RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  constructor (private dialog:MatDialog){};
  panes: { name: string; description: string; price: number; img: string }[] = [
  { name: "Avellana", description: "Pan suave con avellanas tostadas, sabor delicado y textura ligeramente crujiente.", price: 110, img: "assets/img/panes/avellana.jpg" },
  { name: "Centeno Negro", description: "Pan denso de centeno con sabor profundo y ligeramente ácido.", price: 95, img: "assets/img/panes/centenoNegro.jpg" },
  { name: "Chocolatín", description: "Rollito de masa suave relleno de chocolate cremoso.", price: 85, img: "assets/img/panes/chocolatin.jpg" },
  { name: "Concha Bicolor", description: "Concha tradicional con cobertura de vainilla y chocolate en espiral.", price: 25, img: "assets/img/panes/conchaBicolor.jpg" },
  { name: "Concha Chocolate", description: "Concha suave con una cubierta crujiente de chocolate.", price: 25, img: "assets/img/panes/conchaChocolate.jpg" },
  { name: "Croissant Frambuesa", description: "Croissant hojaldrado relleno con dulce de frambuesa natural.", price: 75, img: "assets/img/panes/croisantFrambuesa.jpg" },
  { name: "Dona", description: "Dona clásica esponjosa con un ligero glaseado dulce.", price: 30, img: "assets/img/panes/dona.jpg" },
  { name: "Dona Chocolate", description: "Dona glaseada con chocolate intenso y textura suave.", price: 35, img: "assets/img/panes/donaChocolate.jpg" },
  { name: "Dona Chocolate Especial", description: "Dona cubierta con chocolate y decorada con trozos dulces.", price: 40, img: "assets/img/panes/donaChocolate2.jpg" },
  { name: "Dona Fresa", description: "Dona suave con glaseado de fresa natural y topping dulce.", price: 35, img: "assets/img/panes/donaFresa.jpg" },
  { name: "Eclair Caramelo", description: "Eclair relleno con crema suave y cubierto con caramelo.", price: 55, img: "assets/img/panes/eclairCaramelo.jpg" },
  { name: "Eclair Chocolate", description: "Eclair relleno de crema y cubierto con chocolate oscuro.", price: 55, img: "assets/img/panes/eclairChocolate.jpg" },
  { name: "Frambuesa", description: "Panecillo dulce bañado en salsa de frambuesa fresca.", price: 65, img: "assets/img/panes/frambuesa.jpg" },
  { name: "Frutos Rojos", description: "Pan dulce con mezcla de frutos rojos y glaseado ligero.", price: 70, img: "assets/img/panes/frutos.jpg" },
  { name: "Mantequilla", description: "Pan suave y dorado con un fuerte aroma a mantequilla fresca.", price: 20, img: "assets/img/panes/mantequilla.jpg" },
  { name: "Muffin Mora", description: "Muffin esponjoso con moras naturales y cobertura crujiente.", price: 45, img: "assets/img/panes/muffinMora.jpg" },
  { name: "Naranja", description: "Pan dulce aromatizado con ralladura de naranja fresca.", price: 22, img: "assets/img/panes/naranja.jpg" },
  { name: "Nuez", description: "Pan casero con trozos de nuez tostada y sabor cálido.", price: 25, img: "assets/img/panes/nuez.jpg" },
  { name: "Orejita", description: "Galleta hojaldrada en forma de corazón con azúcar caramelizada.", price: 15, img: "assets/img/panes/orejita.jpg" },
  { name: "Pensamiento", description: "Pastelito premium decorado con flores comestibles Pensamiento.", price: 80, img: "assets/img/panes/pensamiento.jpg" },
  { name: "Plié Chocolate", description: "Pan hojaldrado en espiral relleno de chocolate suave.", price: 45, img: "assets/img/panes/plieChocolate.jpg" },
  { name: "Corazón Mantequilla", description: "Pan en forma de corazón con borde suave y textura aireada.", price: 35, img: "assets/img/panes/unnamed.jpg" },
  { name: "Zanahoria", description: "Pan dulce de zanahoria con glaseado cremoso y nueces.", price: 50, img: "assets/img/panes/zanahoria.jpg" }
];

pasteles: { name: string; description: string; price: number; img: string }[] = [
  { name: "Caramelo Salado", description: "Pastel esponjoso bañado en caramelo salado con capas cremosas y decoración gourmet.", price: 380, img: "assets/img/pasteles/carameloSalado.png" },

  { name: "Cheesecake Fresa", description: "Cheesecake suave con compota de fresa natural y decoración artesanal.", price: 420, img: "assets/img/pasteles/CheescakeFresa.png" },

  { name: "Cheesecake Pera", description: "Pastel cremoso estilo cheesecake acompañado de rebanadas de pera caramelizada.", price: 430, img: "assets/img/pasteles/cheescakePera.png" },

  { name: "Chocolate Fresas", description: "Pastel húmedo de chocolate cubierto con fresas frescas y ganache intenso.", price: 450, img: "assets/img/pasteles/chocolateFresas.png" },

  { name: "Chocolate Pistache", description: "Pastel de chocolate oscuro con capas de crema de pistache y decoración elegante.", price: 480, img: "assets/img/pasteles/chocolatePistache.png" },

  { name: "Crema Cacahuate", description: "Pastel relleno de crema de cacahuate con glaseado dulce y textura suave.", price: 400, img: "assets/img/pasteles/cremaCacahuate.png" },

  { name: "Doble Chocolate", description: "Pastel doble capa con chocolate intenso y cobertura espesa estilo gourmet.", price: 470, img: "assets/img/pasteles/dobleChocolate.png" },

  { name: "Durazno", description: "Pastel fresco con trozos de durazno natural y crema ligera de vainilla.", price: 390, img: "assets/img/pasteles/durazno.png" },

  { name: "Higos", description: "Pastel estilo europeo con higos caramelizados y crema suave de miel.", price: 450, img: "assets/img/pasteles/higos.png" },

  { name: "Kiwi", description: "Pastel refrescante decorado con rodajas de kiwi y crema de frutas naturales.", price: 360, img: "assets/img/pasteles/kiwi.png" },

  { name: "Matcha", description: "Pastel de té matcha japonés con capas suaves y decoración verde vibrante.", price: 480, img: "assets/img/pasteles/matcha.png" },

  { name: "Naranja Almendra", description: "Pastel cítrico con notas de naranja y trozos de almendra tostada.", price: 440, img: "assets/img/pasteles/naranjaAlmendra.png" },

  { name: "Pastel Maracuyá", description: "Pastel tropical con crema de maracuyá y decoración frutal elegante.", price: 420, img: "assets/img/pasteles/pastelMaracuya.png" },

  { name: "Pastel Nuez", description: "Pastel clásico con nueces tostadas y crema suave de vainilla.", price: 410, img: "assets/img/pasteles/pastelnuez.png" },

  { name: "Red Velvet", description: "Pastel Red Velvet tradicional con crema de queso y textura suave.", price: 450, img: "assets/img/pasteles/redVelvet.png" },

  { name: "Vainilla Frutos", description: "Pastel de vainilla con frutos rojos frescos y crema ligera.", price: 430, img: "assets/img/pasteles/vainillaFrutos.png" },

  { name: "Zanahoria", description: "Pastel de zanahoria con especias, nueces y frosting de queso crema.", price: 420, img: "assets/img/pasteles/zanahoria.png" }
];

tartas: { name: string; description: string; price: number; img: string }[] = [
  { name: "Caramelo", description: "Tarta con suave crema y glaseado de caramelo dorado.", price: 260, img: "assets/img/tartas/caramelo.jpg" },

  { name: "Chocolate Blanco", description: "Tarta cremosa con cubierta de chocolate blanco y un toque elegante.", price: 280, img: "assets/img/tartas/chocolateBlanco.jpg" },

  { name: "Chocolate Pistache", description: "Tarta fina con mezcla de chocolate y pistache triturado.", price: 300, img: "assets/img/tartas/chocolatePistache.jpg" },

  { name: "Frambuesa", description: "Tarta fresca decorada con frambuesas naturales y crema ligera.", price: 240, img: "assets/img/tartas/frambuesa.jpg" },

  { name: "Higos", description: "Tarta gourmet con higos caramelizados y base artesanal.", price: 290, img: "assets/img/tartas/higos.jpg" },

  { name: "Invierno", description: "Tarta especial con frutos oscuros y decoración inspirada en el invierno.", price: 320, img: "assets/img/tartas/invierno.jpg" },

  { name: "Manzana", description: "Tarta tradicional de manzana caramelizada con especias suaves.", price: 230, img: "assets/img/tartas/manzana.png" },

  { name: "Maracuyá", description: "Tarta tropical con crema de maracuyá y sabor refrescante.", price: 250, img: "assets/img/tartas/maracuya.png" },

  { name: "Matcha", description: "Tarta japonesa con té matcha y un sabor herbal delicado.", price: 300, img: "assets/img/tartas/matcha.jpg" },

  { name: "Navideña", description: "Tarta temática navideña con frutas rojas y decoración festiva.", price: 320, img: "assets/img/tartas/navideña.jpg" },

  { name: "Navideña Especial", description: "Tarta navideña con mayor decoración y mezcla de frutos y crema.", price: 340, img: "assets/img/tartas/navideña2.jpg" },

  { name: "Navideña Deluxe", description: "Tarta de lujo para temporada navideña con diseño detallado y sabores tradicionales.", price: 360, img: "assets/img/tartas/navideña3.jpg" },

  { name: "Otoño", description: "Tarta aromática con frutos de temporada y especias cálidas.", price: 280, img: "assets/img/tartas/otoño.jpg" },

  { name: "Pensamiento", description: "Tarta decorada con flores comestibles Pensamiento y crema suave.", price: 300, img: "assets/img/tartas/pensamiento.jpg" },

  { name: "Pera", description: "Tarta fina de pera caramelizada con base dorada y crujiente.", price: 260, img: "assets/img/tartas/pera.jpg" },

  { name: "Red Velvet", description: "Versión tarta del clásico Red Velvet con crema de queso.", price: 310, img: "assets/img/tartas/redVelvet.jpg" },

  { name: "Tarta Kiwi", description: "Tarta refrescante cubierta con rodajas de kiwi y crema suave.", price: 240, img: "assets/img/tartas/tartaKiwi.png" },

  { name: "Tarta Moras", description: "Tarta gourmet con moras frescas y base crujiente artesanal.", price: 260, img: "assets/img/tartas/tartaMoras.png" }
];

postres = [
  {
    name: 'Arroz con Leche',
    description: 'Delicioso arroz con leche cremoso.',
    price: 10.99,
    imagen: 'assets/img/postres/arrozLeche.jpg'
  },
  {
    name: 'Brownie',
    description: 'Brownie de chocolate suave y esponjoso.',
    price: 12.50,
    imagen: 'assets/img/postres/brownie.jpg'
  },
  {
    name: 'Capirotada',
    description: 'Tradicional capirotada dulce con frutas.',
    price: 11.99,
    imagen: 'assets/img/postres/capirotada.jpg'
  },
  {
    name: 'Chocolate de frambuesa',
    description: 'Pastel cubierto con chocolate amargo.',
    price: 13.99,
    imagen: 'assets/img/postres/chocolate1.jpg'
  },
  {
    name: 'Cheesecake Matcha',
    description: 'Suave cheesecake con sabor matcha.',
    price: 15.49,
    imagen: 'assets/img/postres/cheescakeMatcha.png'
  },
  {
    name: 'Cheesecake Matcha 2',
    description: 'Variante del cheesecake de matcha.',
    price: 15.49,
    imagen: 'assets/img/postres/cheescakeMatcha2.jpeg'
  },
  {
    name: 'Cheesecake de Moras',
    description: 'Cheesecake fresco con moras.',
    price: 16.49,
    imagen: 'assets/img/postres/cheescakeMoras.jpeg'
  },
  {
    name: 'Cheesecake de Moras 2',
    description: 'Versión especial del cheesecake de moras.',
    price: 16.49,
    imagen: 'assets/img/postres/cheescakeMoras2.jpeg'
  },
  {
    name: 'Postre Caramelo',
    description: 'Postre con caramelo artesanal.',
    price: 12.99,
    imagen: 'assets/img/postres/descarga (1).jpeg'
  },
  {
    name: 'Postre Frutos Rojos',
    description: 'Postre decorado con frutos rojos.',
    price: 14.49,
    imagen: 'assets/img/postres/descarga (2).jpeg'
  },
  {
    name: 'Flan Tradicional',
    description: 'Flan casero con caramelo.',
    price: 9.99,
    imagen: 'assets/img/postres/flan.jpg'
  },
  {
    name: 'Helado Macadamia',
    description: 'Helado artesanal de macadamia.',
    price: 10.49,
    imagen: 'assets/img/postres/helado macadamia.jpg'
  },
  {
    name: 'Manzana Caramelizada',
    description: 'Manzana cubierta con caramelo.',
    price: 8.49,
    imagen: 'assets/img/postres/manzanaCaramelizada.jpg'
  },
  {
    name: 'Mousse de Chocolate',
    description: 'Mousse suave de chocolate.',
    price: 13.49,
    imagen: 'assets/img/postres/mousseChocolate.jpg'
  },
  {
    name: 'Tarta de Queso de Cabra',
    description: 'Tarta gourmet con queso de cabra.',
    price: 18.99,
    imagen: 'assets/img/postres/tartaQueso de cabra.jpg'
  },
  {
    name: 'Tiramisú',
    description: 'Clásico tiramisú italiano.',
    price: 14.99,
    imagen: 'assets/img/postres/tiramisu.png'
  },
  {
    name: 'Trufa Navideña',
    description: 'Trufa dulce con decoración navideña.',
    price: 6.99,
    imagen: 'assets/img/postres/trufaNavideña.jpg'
  },
  {
    name: 'Pastel de Zanahoria',
    description: 'Pastel esponjoso de zanahoria.',
    price: 12.99,
    imagen: 'assets/img/postres/zanahoria.jpg'
  }
];
personalizar() {
  this.dialog.open(PersonalizarPastelComponent, {
    width: '90vw',
    height: '90vh',
    panelClass: 'dialog-fullscreen',
    maxWidth: '90vw',
    maxHeight: '90vh',
    data: {},
    disableClose: false
  });
}



}
