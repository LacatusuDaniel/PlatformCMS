import { Routes } from '@angular/router';
import { LoginComponent } from './views/home/login/login.component';
import {RegisterComponent} from './views/home/register/register.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home/two',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'home/one'
  // },
  {
    path: 'home/two/:pageId',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
];

