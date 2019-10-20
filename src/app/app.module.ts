import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask-2';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
