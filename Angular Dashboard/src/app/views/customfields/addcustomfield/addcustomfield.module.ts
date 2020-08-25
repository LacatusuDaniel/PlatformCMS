import { NgModule } from '@angular/core';


import { AddcustomfieldRoutingModule } from './addcustomfield-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddcustomfieldComponent} from "./addcustomfield.component";



@NgModule({
  imports: [
    AddcustomfieldRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AddcustomfieldComponent]
})
export class AddcustomfieldModule { }
