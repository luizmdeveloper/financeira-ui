import { Component, OnInit } from '@angular/core';

import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from './../categoria.service';
import { CategoriaFiltro } from '../modelo-filtro';
import { Alert } from 'src/app/core/model';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.css']
})
export class PesquisaCategoriaComponent implements OnInit {

  alert: Alert;
  mostraAlert = false;
  filtro = new CategoriaFiltro();
  categorias = [];
  totalElementos: number;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.alert = new Alert();
  }

  pesquisar() {
    this.categoriaService.filtrar(this.filtro)
          .then( resultado => {
              this.categorias = resultado.categorias;
              this.totalElementos = resultado.totalElementos;
          });
  }

  loadPage() {
    this.filtro.paginaAtual = this.filtro.paginaAtual - 1;
    this.pesquisar();
  }

  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.codigo).then(() => {
       this.showAlert(true, 'success', 'Categoria excluída com sucesso!');
       this.pesquisar();
    });
  }

  close() {
    this.showAlert(false, '', '');
  }

  showAlert(mostrar: boolean, type: string, mensagem: string) {
    this.alert.mostrar = mostrar;
    this.alert.type = type;
    this.alert.mensagem = mensagem;
  }

}
