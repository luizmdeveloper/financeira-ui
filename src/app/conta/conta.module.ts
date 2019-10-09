import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContaRoutingModule } from './app.conta-routing.module';

import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

@NgModule({
  declarations: [
    PesquisaContaComponent,
    CadastroContaComponent
  ],
  imports: [
    CommonModule,

    FontAwesomeModule,

    ContaRoutingModule,
  ],
  exports: [
    PesquisaContaComponent,
    CadastroContaComponent
  ]
})
export class ContaModule { }
