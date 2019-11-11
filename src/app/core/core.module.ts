import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePTParserFormatter } from '../NgbDatePTParserFormatter';
import { CustomDatepickerI18n, I18n } from '../CustomDatepickerI18n';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { CategoriaModule } from '../categoria/categoria.module';
import { TransacaoModule } from '../transacao/transacao.module';
import { ContaModule } from '../conta/conta.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SegurancaModule } from './../seguranca/seguranca.module';
import { TransacaoService } from './../transacao/transacao.service';
import { CategoriaService } from './../categoria/categoria.service';
import { ContaService } from './../conta/conta.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OauthService } from '../seguranca/oauth.service';
import { ErroHandlerService } from './erro-handler.service';

registerLocaleData(localePt);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    NavBarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

    FontAwesomeModule,
    NgbModule,
    CurrencyMaskModule,
    SweetAlert2Module.forRoot(),

    DashboardModule,
    CategoriaModule,
    TransacaoModule,
    ContaModule,
    SegurancaModule
  ],
  exports: [
    NavBarComponent,
    SweetAlert2Module
  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: LOCALE_ID, useValue: 'pt' },
    HttpClient,
    OauthService,
    ErroHandlerService,
    ContaService,
    CategoriaService,
    TransacaoService
  ]
})
export class CoreModule { }
