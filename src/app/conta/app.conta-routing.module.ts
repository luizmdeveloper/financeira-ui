import { AuthGuard } from './../seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';


import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

const routes: Routes = [
  {
    path: 'contas',
    component: PesquisaContaComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_PESQUISAR_CONTA'}
  },
  {
    path: 'contas/nova',
    component: CadastroContaComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_SALVAR_CONTA'}
  },
  {
    path: 'contas/:codigo',
    component: CadastroContaComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_SALVAR_CONTA'}
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
export class ContaRoutingModule {}
