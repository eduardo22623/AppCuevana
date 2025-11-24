import { Routes } from '@angular/router';

export const routes: Routes = [
  // Esta línea le dice: "Si la ruta está vacía, vete a Inicio"
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  // Aquí definimos tus 3 páginas
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo.page').then( m => m.CatalogoPage)
  },
  {
    path: 'detalle/:id',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
];