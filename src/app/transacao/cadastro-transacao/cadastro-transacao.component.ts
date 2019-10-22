import { Component, OnInit } from '@angular/core';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { Transacao } from 'src/app/core/model';
import { TransacaoService } from '../transacao.service';
import { ErroHandlerService } from 'src/app/core/erro-handler.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ContaService } from 'src/app/conta/conta.service';

@Component({
  selector: 'app-cadastro-transacao',
  templateUrl: './cadastro-transacao.component.html',
  styleUrls: ['./cadastro-transacao.component.css']
})
export class CadastroTransacaoComponent implements OnInit {

  categorias = [{codigo: 0, nome: 'Selecione'}];
  contas = [{codigo: 0, nome: 'Selecione'}];
  transacao = new Transacao();
  faCalendar = faCalendar;

  constructor(private transacaoService: TransacaoService,
              private erroHandlerService: ErroHandlerService,
              private categoriaService: CategoriaService,
              private contaService: ContaService) { }

  ngOnInit() {
    this.carregarTodasCategorias();
    this.carregarTodasContas();
    this.transacao.categoria.codigo = 0;
    this.transacao.conta.codigo = 0;
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
}
