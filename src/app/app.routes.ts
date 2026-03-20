import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'helados',
    loadComponent: () =>
      import('./pages/helados/helados.component').then(m => m.HeladosComponent)
  },
  {
    path: 'paletas',
    loadComponent: () =>
      import('./pages/paletas/paletas.component').then(m => m.PaletasComponent)
  },
  {
    path: 'bebidas',
    loadComponent: () =>
      import('./pages/bebidas/bebidas.component').then(m => m.BebidasComponent)
  },
  {
    path: 'postres',
    loadComponent: () =>
      import('./pages/postres/postres.component').then(m => m.PostresComponent)
  },
  {
    path: 'ubicacion',
    loadComponent: () =>
      import('./pages/ubicacion/ubicacion.component').then(m => m.UbicacionComponent)
  },
  {
    path: 'horarios',
    loadComponent: () =>
      import('./pages/horarios/horarios.component').then(m => m.HorariosComponent)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: 'trabaja',
    loadComponent: () =>
      import('./pages/trabaja/trabaja.component').then(m => m.TrabajaComponent)
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'condiciones',
    loadComponent: () =>
      import('./pages/condiciones/condiciones.component').then(m => m.CondicionesComponent)
  },
  {
    path: 'politica',
    loadComponent: () =>
      import('./pages/politica/politica.component').then(m => m.PoliticaComponent)
  },
  {
    path: 'cookies',
    loadComponent: () =>
      import('./pages/cookies/cookies.component').then(m => m.CookiesComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
