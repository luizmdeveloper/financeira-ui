import { Component, OnInit } from '@angular/core';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendar, faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

import { TransacaoFiltro } from '../model-filtro';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ContaService } from 'src/app/conta/conta.service';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-pesquisa-transacao',
  templateUrl: './pesquisa-transacao.component.html',
  styleUrls: ['./pesquisa-transacao.component.css']
})
export class PesquisaTransacaoComponent implements OnInit {

  categorias = [{codigo: 0, nome: 'Selecione'}];
  contas = [{codigo: 0, nome: 'Selecione'}];
  filtro = new TransacaoFiltro();
  totalElementos: number;

  emissaoDe: NgbDateStruct;
  emissaoAte: NgbDateStruct;
  transacoes = [];

  faCalendar = faCalendar;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor(private categoriaService: CategoriaService,
              private contaService: ContaService,
              private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.carregarTodasCategorias();
    this.carregarTodasContas();
    this.pesquisar();
  }

  carregarTodasCategorias() {
    this.categoriaService.buscarTodas().then(categorias => {
      categorias.forEach(categoria => {
        this.categorias.push(categoria);
      });
    });
  }

  carregarTodasContas() {

    this.contaService.buscarTodos().then(contas => {
      contas.forEach(conta => {
        this.contas.push(conta);
      });
    });
  }

  pesquisar() {
    if (this.emissaoDe)
       this.filtro.dataDe = new Date(this.emissaoDe.year, this.emissaoDe.month -1, this.emissaoDe.day, 0, 0, 0);
    if (this.emissaoAte)
       this.filtro.dataAte = new Date(this.emissaoAte.year, this.emissaoAte.month -1, this.emissaoAte.day, 0, 0, 0);
    console.log(this.filtro);
    this.transacaoService.filtrar(this.filtro).then(resultado => {
      this.transacoes = resultado.transacoes;
      this.totalElementos = resultado.totalElementos;
    });
  }

  loadEvent() {
    this.filtro.paginaAtual = this.filtro.paginaAtual - 1;
    this.pesquisar();
    this.filtro.paginaAtual = this.filtro.paginaAtual + 1;
  }

}
