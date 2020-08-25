import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutes } from './home.routing';


import { HomeTwoComponent } from './home-two.component';
import { HomeOneComponent } from './home-one.component';


import { HeaderComponent } from './header/header.component';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';

import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { SharedDirectivesModule } from 'app/shared/directives/shared-directives.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';


import {RenderHtmlComponent} from '../../render-html/render-html.component';
import {HeaderAdminComponent} from './header_admin/header-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeTwoComponent,
    HomeOneComponent,
    HeaderComponent,
    HeaderAdminComponent,
 RenderHtmlComponent

  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
