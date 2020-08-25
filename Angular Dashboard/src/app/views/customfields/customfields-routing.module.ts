import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



import {CustomfieldsComponent} from "./customfields.component";

const routes: Routes = [

  {
    path: '',
    component: CustomfieldsComponent,
    data: {
      title: 'Custom Fields'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomfieldsRoutingModule {
}

