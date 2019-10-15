import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { SegurancaRoutingModule } from './app.seguranca-routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
