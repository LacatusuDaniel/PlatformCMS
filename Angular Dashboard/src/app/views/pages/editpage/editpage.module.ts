import { NgModule } from '@angular/core';


import { EditpageComponent } from './editpage.component';

import { EditpageRoutingModule } from './editpage-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    EditpageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ EditpageComponent]
})
export class EditpageModule { }
