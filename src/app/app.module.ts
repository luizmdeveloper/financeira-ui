import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePTParserFormatter } from './NgbDatePTParserFormatter';
import { CustomDatepickerI18n, I18n } from './CustomDatepickerI18n';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { CadastroTransacaoComponent } from './cadastro-transacao/cadastro-transacao.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    AppComponent,
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent,
    PesquisaContaComponent,
    CadastroContaComponent,
    PesquisaTransacaoComponent,
    CadastroTransacaoComponent
  ],
  imports: [
    BrowserModule,

    FontAwesomeModule,
    NgbModule,
    CurrencyMaskModule
  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
