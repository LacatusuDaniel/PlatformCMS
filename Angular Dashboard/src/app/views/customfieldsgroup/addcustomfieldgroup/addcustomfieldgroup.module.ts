import { NgModule } from '@angular/core';


import { AddcustomfieldgroupRoutingModule } from './addcustomfieldgroup-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddcustomfieldgroupComponent} from "./addcustomfieldgroup.component";



@NgModule({
  imports: [
    AddcustomfieldgroupRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AddcustomfieldgroupComponent]
})
export class AddcustomfieldgroupModule { }
