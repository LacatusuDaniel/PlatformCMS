import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddcustomfieldgroupComponent} from "./addcustomfieldgroup.component";


const routes: Routes = [
  {
    path: '',
    component: AddcustomfieldgroupComponent,
    data: {
      title: 'Add Custom field group'
    },
    children: [

      {
        path: 'pages/addcustomfield',
        loadChildren: () => import('./addcustomfieldgroup.module').then(m => m.AddcustomfieldgroupModule)
      },
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddcustomfieldgroupRoutingModule {
}

