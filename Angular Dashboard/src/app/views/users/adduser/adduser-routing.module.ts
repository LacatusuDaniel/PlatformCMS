import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AdduserComponent} from "./adduser.component";




const routes: Routes = [
  {
    path: '',
      component: AdduserComponent,
    data: {
      title: 'Add User'
    },

  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdduserRoutingModule {
}

