import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

// import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '../SharedComponents/node_modules/@angular/common/http';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import {AuthInterceptor} from '../../../SharedComponents/src/app/_helpers/auth.interceptor';
// import {AuthInterceptor} from './views/home/_helpers/auth.interceptor';
import { RenderHtmlComponent } from './render-html/render-html.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [RenderHtmlComponent]
})

export class AppModule { }
