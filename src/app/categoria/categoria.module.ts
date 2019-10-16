import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

    FontAwesomeModule,

    CategoriaRoutingModule
  ],
  exports: [],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }
