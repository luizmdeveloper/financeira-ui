import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { CadastroTransacaoComponent } from './cadastro-transacao/cadastro-transacao.component';

const routes: Routes = [
  {
    path: 'transacoes',
    component: PesquisaTransacaoComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_PESQUISAR_TRANSACAO'}
  },
  {
    path: 'transacoes/novo',
    component: CadastroTransacaoComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_SALVAR_TRANSACAO'}
  },
  {
    path: 'transacoes/:codigo',
    component: CadastroTransacaoComponent,
    CanActivate: [AuthGuard],
    data: {role: 'ROLE_SALVAR_TRANSACAO'}
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
export class TransacaoRoutingModule {
