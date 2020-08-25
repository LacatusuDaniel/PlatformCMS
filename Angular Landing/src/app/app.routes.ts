import { Routes } from '@angular/router';


export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home/two',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
];

