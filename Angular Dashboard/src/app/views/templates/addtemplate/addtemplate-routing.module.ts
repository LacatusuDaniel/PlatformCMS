import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AddtemplateComponent} from "./addtemplate.component";


const routes: Routes = [
  {
    path: '',
    component: AddtemplateComponent,
    data: {
      title: 'Add template'
    }
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddtemplateRoutingModule {
}

