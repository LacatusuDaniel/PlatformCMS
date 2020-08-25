import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



import {PagesComponent} from "./pages.component";
import {TemplatesComponent} from "../templates/templates.component";
import {P404Component} from "../error/404.component";
import {P500Component} from "../error/500.component";

import {RegisterComponent} from "../register/register.component";
import {DefaultLayoutComponent} from "../../containers/default-layout";



const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    data: {
      title: 'Pages'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}

