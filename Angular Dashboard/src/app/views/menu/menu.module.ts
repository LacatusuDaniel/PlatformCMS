import { NgModule } from '@angular/core';


import { MenuRoutingModule} from './menu-routing.module';
import {CommonModule} from "@angular/common";
import {MenuComponent} from "./menu.component";
import {DragDropModule } from "@angular/cdk/drag-drop";


@NgModule({
  imports: [
    MenuRoutingModule,
    CommonModule,
    DragDropModule
  ],
  declarations: [ MenuComponent ]
})
export class MenuModule { }
