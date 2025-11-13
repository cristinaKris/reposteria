import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: '**', redirectTo: '/home'}
];
