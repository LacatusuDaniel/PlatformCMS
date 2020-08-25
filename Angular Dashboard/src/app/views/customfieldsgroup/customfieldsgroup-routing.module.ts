import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



import {CustomfieldsgroupComponent} from "./customfieldsgroup.component";

const routes: Routes = [

  {
    path: '',
    component: CustomfieldsgroupComponent,
    data: {
      title: 'Custom Fields Group'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomfieldsgroupRoutingModule {
}

