import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: PesquisaCategoriaComponent
  },
  {
    path: 'categorias/nova',
    component: CadastroCategoriaComponent
  },
  {
    path: 'categorias/:codigo',
    component: CadastroCategoriaComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriaRoutingModule {}
