import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: PesquisaCategoriaComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_PESQUISAR_CATEGORIA'}
  },
  {
    path: 'categorias/nova',
    component: CadastroCategoriaComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_SALVAR_CATEGORIA'}
  },
  {
    path: 'categorias/:codigo',
    component: CadastroCategoriaComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_SALVAR_CATEGORIA'}
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
