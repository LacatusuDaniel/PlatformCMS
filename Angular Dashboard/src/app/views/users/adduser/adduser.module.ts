import { NgModule } from '@angular/core';


import { AdduserComponent } from './adduser.component';
import { AdduserRoutingModule } from './adduser-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    AdduserRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AdduserComponent]
})
export class AdduserModule { }
