import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {EditcustomfieldgroupComponent} from "./editcustomfieldgroup.component";


const routes: Routes = [
  {
    path: '',
    component: EditcustomfieldgroupComponent,
    data: {
      title: 'Edit custom field group'
    }
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditcustomfieldgroupRoutingModule {
}

