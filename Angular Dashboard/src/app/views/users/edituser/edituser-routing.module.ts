import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {EdituserComponent} from "./edituser.component";


const routes: Routes = [
  {
    path: '',
    component: EdituserComponent,
    data: {
      title: 'Edit User'
    }
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EdituserRoutingModule {
}

