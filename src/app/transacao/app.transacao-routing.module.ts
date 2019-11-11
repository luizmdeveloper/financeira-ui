import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { CadastroTransacaoComponent } from './cadastro-transacao/cadastro-transacao.component';

const routes: Routes = [
  {
    path: 'transacoes',
    component: PesquisaTransacaoComponent
  },
  {
    path: 'transacoes/novo',
    component: CadastroTransacaoComponent
  },
  {
    path: 'transacoes/:codigo',
    component: CadastroTransacaoComponent
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
export class TransacaoRoutingModule {}
