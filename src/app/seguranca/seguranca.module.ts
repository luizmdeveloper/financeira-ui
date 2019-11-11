import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';

import { SegurancaRoutingModule } from './app.seguranca-routing';

@NgModule({
  declarations: [
    LoginComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
