import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContaRoutingModule } from './app.conta-routing.module';

import { ContaService } from './conta.service';
import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

@NgModule({
  declarations: [
    PesquisaContaComponent,
    CadastroContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    NgbAlertModule,
    NgbPaginationModule,
    FontAwesomeModule,

    ContaRoutingModule,
  ],
  exports: [
    PesquisaContaComponent,
    CadastroContaComponent
  ]
})
export class ContaModule { }
