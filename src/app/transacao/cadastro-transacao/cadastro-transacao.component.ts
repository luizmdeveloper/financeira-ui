import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { Transacao } from '../../core/model';
import { Alert } from '../../core/model';
import { TransacaoService } from '../transacao.service';
import { CategoriaService } from '../../categoria/categoria.service';
import { ErroHandlerService } from '../../core/erro-handler.service';
import { ContaService } from '../../conta/conta.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-transacao',
  templateUrl: './cadastro-transacao.component.html',
  styleUrls: ['./cadastro-transacao.component.css']
})
export class CadastroTransacaoComponent implements OnInit {

  alert: Alert;
  categorias = [{codigo: 0, nome: 'Selecione'}];
  contas = [{codigo: 0, nome: 'Selecione'}];
  transacao: Transacao;
  faCalendar = faCalendar;
  emissao: NgbDateStruct;

  constructor(private transacaoService: TransacaoService,
              private erroHandlerService: ErroHandlerService,
              private categoriaService: CategoriaService,
              private contaService: ContaService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.carregarTodasCategorias();
    this.carregarTodasContas();
    this.criarTransacao();
    this.alert = new Alert();

    const codigo = this.activatedRoute.snapshot.params['codigo'];
    if (codigo) {
      this.emissao = {year: 0, month: 0, day: 0};
      this.buscarTransacaoPorCodigo(codigo);
    }
  }

  get editando() {
    return Boolean(this.transacao.codigo);
  }

  criarTransacao() {
    this.transacao = new Transacao();
    this.transacao.categoria.codigo = 0;
    this.transacao.conta.codigo = 0;
    this.transacao.tipo = 'C';
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

  salvar(formulario: FormControl) {
    if (this.emissao) {
      this.transacao.data = new Date(this.emissao.year, this.emissao.month - 1, this.emissao.day, 0, 0, 0);
    }

    if (this.editando) {
      this.atualizar();
    } else {
      this.gravar(formulario);
    }
  }

  atualizar() {
    this.transacaoService.atualizar(this.transacao.codigo, this.transacao)
      .then(() => {
        this.router.navigate(['/transacoes']);
      })
      .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));

  }

  gravar(formulario: FormControl) {
    this.transacaoService.salvar(this.transacao)
      .then(transacaoSalva => {
          this.showAlert(true, 'success', 'transação salva com sucesso!');
          formulario.reset();
          this.criarTransacao();
      })
      .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));
  }

  buscarTransacaoPorCodigo(codigo: number) {
    this.transacaoService.buscarPorCodigo(codigo)
      .then(transacao => {
          this.transacao = transacao;
          // this.emissao.year = this.transacao.data.getFullYear();
          // this.emissao = { day: this.transacao.data.getDay(),
          //                  month: this.transacao.data.getMonth() + 1,
          //                  year: this.transacao.data.getFullYear() }
      })
      .catch(erro => {
        this.showAlert(true, 'danger', this.erroHandlerService.handle(erro))
      });
  }

  showAlert(mostra: boolean, type: string, mensagem: string) {
    this.alert.mostrar = mostra;
    this.alert.type = type;
    this.alert.mensagem = mensagem;
  }

  closeAlert() {
    this.showAlert(false, '', '');
  }
}
