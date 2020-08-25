import { NgModule } from '@angular/core';


import { AddtemplateComponent } from './addtemplate.component';

import { AddtemplateRoutingModule } from './addtemplate-routing.module';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  imports: [
    AddtemplateRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ AddtemplateComponent]
})
export class AddtemplateModule { }
