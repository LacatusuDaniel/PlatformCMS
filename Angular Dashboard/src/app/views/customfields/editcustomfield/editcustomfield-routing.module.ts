import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {EditcustomfieldComponent} from "./editcustomfield.component";


const routes: Routes = [
  {
    path: '',
    component: EditcustomfieldComponent,
    data: {
      title: 'Edit custom field'
    }
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditcustomfieldRoutingModule {
}

