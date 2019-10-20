import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Alert } from './../../core/model';
import { Conta } from './../../core/model';
import { FormControl } from '@angular/forms';
import { ErroHandlerService } from './../../core/erro-handler.service';
import { ContaService } from './../conta.service';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  alert: Alert;
  conta: Conta;

  constructor(private contaService: ContaService,
              private erroHandlerService: ErroHandlerService,
              private routeActived: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    this.alert = new Alert();
    this.conta = new Conta();

    const codigoConta = this.routeActived.snapshot.params['codigo'];

    if (codigoConta) {
      this.buscarPorCodigo(codigoConta);
    }
  }

  get editando() {
    return Boolean(this.conta.codigo);
  }

  buscarPorCodigo(codigo: number) {
    this.contaService.buscarPorCodigo(codigo)
      .then(conta => {
        this.conta = conta;
      })
      .catch(erro => {
         this.showAlert(true, 'danger', this.erroHandlerService.handle(erro));
      });
  }

  salvar(formulario: FormControl) {
    if (this.editando) {
      this.atualizar();
    } else {
      this.gravar(formulario);
    }
  }

  gravar(formulario: FormControl) {
    this.contaService.salvar(this.conta)
        .then(() => {
          this.showAlert(true, 'success', 'Conta salva com sucesso!');
          formulario.reset();
          this.conta = new Conta();
        })
        .catch(erro => {
          this.showAlert(true, 'danger', this.erroHandlerService.handle(erro))
        });
  }

  atualizar() {
    this.contaService.atualizar(this.conta.codigo, this.conta)
          .then(() => {
            this.route.navigate(['/contas']);
          })
          .catch(erro => {
            this.showAlert(true, 'danger', this.erroHandlerService.handle(erro));
          });
  }

  showAlert(mostra: boolean, type: string, mensagem: string){
    this.alert.mostrar = mostra;
    this.alert.type = type;
    this.alert.mensagem = mensagem;
  }

  closeAlert(){
    this.showAlert(false, '', '');
  }

}
