import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePTParserFormatter } from './NgbDatePTParserFormatter';
import { CustomDatepickerI18n, I18n } from './CustomDatepickerI18n';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent,
    PesquisaContaComponent,
    CadastroContaComponent,
    PesquisaTransacaoComponent
  ],
  imports: [
    BrowserModule,

    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
