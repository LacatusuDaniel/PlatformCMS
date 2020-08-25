import { NgModule } from '@angular/core';


import { EdituserComponent } from './edituser.component';

import { EdituserRoutingModule } from './edituser-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    EdituserRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ EdituserComponent]
})
export class EdituserModule { }
