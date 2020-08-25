import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditcustomfieldgroupRoutingModule} from "./editcustomfieldgroup-routing.module";
import {EditcustomfieldgroupComponent} from "./editcustomfieldgroup.component";



@NgModule({
  imports: [
    EditcustomfieldgroupRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ EditcustomfieldgroupComponent]
})
export class EditcustomfieldgroupModule { }
