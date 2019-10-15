import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

import { SegurancaRoutingModule } from './app.seguranca-routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,

    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
