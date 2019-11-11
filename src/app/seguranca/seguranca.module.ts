import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './login/login.component';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { environment } from './../../environments/environment';
import { SegurancaRoutingModule } from './app.seguranca-routing';

export function tokenGetter() {
  return localStorage.getItem('token_ir');
}

@NgModule({
  declarations: [
    LoginComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),

    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
