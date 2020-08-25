import { NgModule } from '@angular/core';


import { EdittemplateComponent } from './edittemplate.component';

import { EdittemplateRoutingModule } from './edittemplate-routing.module';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  imports: [
    EdittemplateRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ EdittemplateComponent]
})
export class EdittemplateModule { }
