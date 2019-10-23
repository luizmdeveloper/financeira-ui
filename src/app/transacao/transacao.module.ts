import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputMaskModule } from 'racoon-mask-raw';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { TransacaoRoutingModule } from './app.transacao-routing.module';
import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { CadastroTransacaoComponent } from './cadastro-transacao/cadastro-transacao.component';

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
    NgbAlertModule,
    CurrencyMaskModule,
    SweetAlert2Module,

    TransacaoRoutingModule
  ]
})
export class TransacaoModule { }
