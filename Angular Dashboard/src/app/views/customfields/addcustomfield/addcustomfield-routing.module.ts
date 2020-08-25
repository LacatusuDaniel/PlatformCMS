import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddcustomfieldComponent} from "./addcustomfield.component";


const routes: Routes = [
  {
    path: '',
    component: AddcustomfieldComponent,
    data: {
      title: 'Add Custom field'
    },
    children: [

      {
        path: 'pages/addcustomfield',
        loadChildren: () => import('./addcustomfield.module').then(m => m.AddcustomfieldModule)
      },
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddcustomfieldRoutingModule {
}

