import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CategoriaRoutingModule } from './app.categoria-routing.module';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CategoriaService } from './categoria.service';

@NgModule({
  declarations: [
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbAlertModule,
    SweetAlert2Module,

    FontAwesomeModule,

    CategoriaRoutingModule
  ],
  exports: [],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }
