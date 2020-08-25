import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {EdittemplateComponent} from "./edittemplate.component";


const routes: Routes = [
  {
    path: '',
    component: EdittemplateComponent,
    data: {
      title: 'Edit template'
    }
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EdittemplateRoutingModule {
}

