import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'racoon-mask-raw';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransacaoRoutingModule } from './app.transacao-routing.module';

import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { CadastroTransacaoComponent } from './cadastro-transacao/cadastro-transacao.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PesquisaTransacaoComponent,
    CadastroTransacaoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputMaskModule,
    FontAwesomeModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbTooltipModule,

    TransacaoRoutingModule
  ]
})
export class TransacaoModule { }
