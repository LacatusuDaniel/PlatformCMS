import { Routes } from '@angular/router';

import { HomeOneComponent } from './home-one.component';
import { HomeTwoComponent } from './home-two.component';
import { AllSectionsComponent } from './all-sections.component';
import { DemoComponent } from './demo/demo.component';
import { HomeThreeComponent } from './home-three.component';

export const HomeRoutes: Routes = [
  { path: 'admin', component: HomeOneComponent },
  { path: '', component: HomeTwoComponent },

  { path: 'demos', component: DemoComponent }
];
