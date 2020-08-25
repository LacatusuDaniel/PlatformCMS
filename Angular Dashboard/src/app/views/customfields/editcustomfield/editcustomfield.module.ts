import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditcustomfieldRoutingModule} from "./editcustomfield-routing.module";
import {EditcustomfieldComponent} from "./editcustomfield.component";



@NgModule({
  imports: [
    EditcustomfieldRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ EditcustomfieldComponent]
})
export class EditcustomfieldModule { }
