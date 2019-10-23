import { Component, OnInit } from '@angular/core';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendar, faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

import { TransacaoFiltro } from '../model-filtro';
import { CategoriaService } from '../../categoria/categoria.service';
import { ContaService } from '../../conta/conta.service';
import { TransacaoService } from '../transacao.service';
import { ErroHandlerService } from '../../core/erro-handler.service';
import { Alert } from '../../core/model';

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
  alert: Alert;

  emissaoDe: NgbDateStruct;
  emissaoAte: NgbDateStruct;
  transacoes = [];

  faCalendar = faCalendar;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  constructor(private categoriaService: CategoriaService,
              private erroHandlerService: ErroHandlerService,
              private contaService: ContaService,
              private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.carregarTodasCategorias();
    this.carregarTodasContas();
    this.pesquisar();
    this.alert = new Alert();
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
    if (this.emissaoDe) {
      this.filtro.dataDe = new Date(this.emissaoDe.year, this.emissaoDe.month -1, this.emissaoDe.day, 0, 0, 0);
    }

    if (this.emissaoAte) {
      this.filtro.dataAte = new Date(this.emissaoAte.year, this.emissaoAte.month -1, this.emissaoAte.day, 0, 0, 0);
    }

    this.transacaoService.filtrar(this.filtro)
      .then(resultado => {
        this.transacoes = resultado.transacoes;
        this.totalElementos = resultado.totalElementos;
      })
      .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));
  }

  loadPage() {
    this.filtro.paginaAtual = this.filtro.paginaAtual - 1;
    this.pesquisar();
    this.filtro.paginaAtual = this.filtro.paginaAtual + 1;
  }

  showAlert(mostrar: boolean, type: string, mensagem: string) {
    this.alert.mostrar = mostrar;
    this.alert.type = type;
    this.alert.mensagem = mensagem;
  }

  closeAlert() {
    this.showAlert(false, '', '');
  }

  excluir(transacao) {
    this.transacaoService.excluir(transacao.codigo)
      .then(() => {
        this.showAlert(true, 'success', 'Transação exclída com sucesso!');
        this.loadPage();
      })
      .catch(erro => {
        this.showAlert(true, 'danger', this.erroHandlerService.handle(erro));
      });
  }
}
