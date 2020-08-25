import { NgModule } from '@angular/core';


import { CustomfieldsgroupComponent } from './customfieldsgroup.component';
import { CustomfieldsgroupRoutingModule} from './customfieldsgroup-routing.module';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CustomfieldsgroupRoutingModule,
    CommonModule,
  ],
  declarations: [ CustomfieldsgroupComponent ]
})
export class CustomfieldsgroupModule { }
