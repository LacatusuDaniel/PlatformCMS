import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {TemplatesComponent} from "./templates.component";


const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent,
    data: {
      title: 'Templates'
    }
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TemplatesRoutingModule {
}

