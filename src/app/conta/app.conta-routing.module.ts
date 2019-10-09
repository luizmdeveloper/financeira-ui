import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

const routes: Routes = [
  {
    path: 'contas',
    component: PesquisaContaComponent
  },
  {
    path: 'contas/nova',
    component: CadastroContaComponent
  },
  {
    path: 'contas/:codigo',
    component: CadastroContaComponent
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
