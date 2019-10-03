import { Component, OnInit } from '@angular/core';

import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pesquisa-conta',
  templateUrl: './pesquisa-conta.component.html',
  styleUrls: ['./pesquisa-conta.component.css']
})
export class PesquisaContaComponent implements OnInit {

  contas = [
    { codigo: 1, nome: 'Carteira', banco: false },
    { codigo: 2, nome: 'Banco do Brasil', banco: true }
  ];

  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
