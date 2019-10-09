import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriaRoutingModule } from './app.categoria-routing.module';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';


@NgModule({
  declarations: [
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    CommonModule,

    FontAwesomeModule,

    CategoriaRoutingModule
  ],
  exports: [
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent
  ]
})
export class CategoriaModule { }
