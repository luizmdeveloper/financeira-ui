
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePTParserFormatter } from '../NgbDatePTParserFormatter';
import { CustomDatepickerI18n, I18n } from '../CustomDatepickerI18n';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { CategoriaModule } from '../categoria/categoria.module';
import { TransacaoModule } from '../transacao/transacao.module';
import { ContaModule } from '../conta/conta.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SegurancaModule } from './../seguranca/seguranca.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    FontAwesomeModule,
    NgbModule,
    NgbTooltipModule,
    CurrencyMaskModule,

    DashboardModule,
    CategoriaModule,
    TransacaoModule,
    ContaModule,
    SegurancaModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class CoreModule { }
