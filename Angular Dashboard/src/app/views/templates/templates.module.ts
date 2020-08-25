import { NgModule } from '@angular/core';


import { TemplatesComponent } from './templates.component';

import { TemplatesRoutingModule } from './templates-routing.module';
import {CommonModule} from "@angular/common";



@NgModule({
  imports: [
    TemplatesRoutingModule,
    CommonModule
  ],
  declarations: [ TemplatesComponent]
})
export class TemplatesModule { }
