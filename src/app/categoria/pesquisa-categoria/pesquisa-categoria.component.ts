import { Component, OnInit } from '@angular/core';

import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.css']
})
export class PesquisaCategoriaComponent implements OnInit {

  categorias = [
    { codigo: 1, nome: 'Salário' },
    { codigo: 2, nome: 'Prolabore' },
    { codigo: 3, nome: 'Investimento' },
    { codigo: 4, nome: 'Lazer' },
    { codigo: 5, nome: 'Educação' }
  ];

  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
