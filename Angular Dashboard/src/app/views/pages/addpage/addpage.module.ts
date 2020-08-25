import { NgModule } from '@angular/core';


import { AddpageComponent } from './addpage.component';
import { AddpageRoutingModule } from './addpage-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap/alert";



@NgModule({
  imports: [
    AddpageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
  ],
  declarations: [ AddpageComponent]
})
export class AddpageModule { }
