import { NgModule } from '@angular/core';


import { CustomfieldsComponent } from './customfields.component';
import { CustomfieldsRoutingModule} from './customfields-routing.module';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CustomfieldsRoutingModule,
    CommonModule,
  ],
  declarations: [ CustomfieldsComponent ]
})
export class CustomfieldsModule { }
