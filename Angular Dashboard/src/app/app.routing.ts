import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },

  {
    path: '',
    component: DefaultLayoutComponent,

    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)

      },

      {
        path: 'pages',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'pages/:pageId',
        loadChildren: () => import('./views/pages/editpage/editpage.module').then(m => m.EditpageModule)
      },
      {
        path: 'addpage',
        loadChildren: () => import('./views/pages/addpage/addpage.module').then(m => m.AddpageModule)
      },
      {
        path: 'templates',
        loadChildren: () => import('./views/templates/templates.module').then(m => m.TemplatesModule)
      },
      {
        path: 'templates/:templateId',
        loadChildren: () => import('./views/templates/edittemplate/edittemplate.module').then(m => m.EdittemplateModule)
      },
      {
        path: 'addtemplate',
        loadChildren: () => import('./views/templates/addtemplate/addtemplate.module').then(m => m.AddtemplateModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'users/:userId',
        loadChildren: () => import('./views/users/edituser/edituser.module').then(m => m.EdituserModule)
      },
      {
        path: 'adduser',
        loadChildren: () => import('./views/users/adduser/adduser.module').then(m => m.AdduserModule)
      },
      {
        path: 'customfields',
        loadChildren: () => import('./views/customfields/customfields.module').then(m => m.CustomfieldsModule)
      },
      {
        path: 'customfields/:customfieldId',
        loadChildren: () => import('./views/customfields/editcustomfield/editcustomfield.module').then(m => m.EditcustomfieldModule)
      },
      {
        path: 'addcustomfield',
        loadChildren: () => import('./views/customfields/addcustomfield/addcustomfield.module').then(m => m.AddcustomfieldModule)
      },
      {
        path: 'customfieldsgroup',
        loadChildren: () => import('./views/customfieldsgroup/customfieldsgroup.module').then(m => m.CustomfieldsgroupModule)
      },
      {
        path: 'customfieldsgroup/:groupId',
        loadChildren: () => import('./views/customfields/customfields.module').then(m => m.CustomfieldsModule)
      },
      {
        path: 'addcustomfieldgroup',
        loadChildren: () => import('./views/customfieldsgroup/addcustomfieldgroup/addcustomfieldgroup.module').then(m => m.AddcustomfieldgroupModule)
      },
      {
        path: 'customfieldsgroups/:groupId',
        loadChildren: () => import('./views/customfieldsgroup/editcustomfieldgroup/editcustomfieldgroup.module').then(m => m.EditcustomfieldgroupModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./views/menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

    ]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
