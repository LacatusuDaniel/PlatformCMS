import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AddpageComponent} from "./addpage.component";
import {PagesComponent} from "../pages.component";

//
// const routes: Routes = [
//   {
//     path: '',
//     component: AddpageComponent,
//     data: {
//       title: 'Add Page'
//     }
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: AddpageComponent,
    data: {
      title: 'Add Page'
    },
    children: [

      {
        path: 'pages/addpage',
        loadChildren: () => import('./addpage.module').then(m => m.AddpageModule)
      },
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddpageRoutingModule {
}

