import { Component, OnInit } from '@angular/core';

import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.css']
})
export class PesquisaCategoriaComponent implements OnInit {

  nome: string;
  categorias = [];

  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {}

  pesquisar(){
    this.categoriaService.filtrar({nome: this.nome}).then(
      response => {
        console.log(response);
      });
  }

}
