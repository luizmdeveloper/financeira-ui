import { Component, OnInit } from '@angular/core';

import { faCalendar, faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pesquisa-transacao',
  templateUrl: './pesquisa-transacao.component.html',
  styleUrls: ['./pesquisa-transacao.component.css']
})
export class PesquisaTransacaoComponent implements OnInit {

  transacoes = [
    {codigo: 1, categoria: 'Salário', conta: 'Carteira', data: '02/10/2019', tipoTransacao: 'C', valor: 2200, conciliado: true},
    {codigo: 2, categoria: 'Investimento', conta: 'Carteira', data: '05/10/2019', tipoTransacao: 'D', valor: 600, conciliado: false},
    {codigo: 3, categoria: 'Impostos', conta: 'Carteira', data: '05/10/2019', tipoTransacao: 'D', valor: 205.5, conciliado: true},
    {codigo: 3, categoria: 'Depesasas bancárias', conta: 'Banco do Brasil', data: '05/10/2019', tipoTransacao: 'D', valor: 25, conciliado: true}
  ]

  faCalendar = faCalendar;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
