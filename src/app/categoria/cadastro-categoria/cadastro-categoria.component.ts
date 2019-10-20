import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CategoriaService } from './../categoria.service';
import { Categoria, Alert } from './../../core/model';
import { ErroHandlerService } from './../../core/erro-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  alert: Alert;
  categoria = new Categoria();

  constructor(private categoriaService: CategoriaService,
              private erroHandlerService: ErroHandlerService,
              private routeActived: ActivatedRoute) { }

  ngOnInit() {
    this.alert = new Alert();
    const codigoCategoria = this.routeActived.snapshot.params['codigo'];

    if (codigoCategoria){
      this.buscarPorCodigo(codigoCategoria);
    }
  }

  buscarPorCodigo(codigo: number){
    this.categoriaService.buscarPorCodigo(codigo)
      .then(categoria => {
          this.categoria = categoria;
      })
      .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));
  }

  salvar(formulario: FormControl) {
    if (this.editando) {
      this.atualizar(formulario);
    } else {
      this.gravar(formulario);
    }
  }

  gravar(formulario: FormControl){
    this.categoriaService.salvar(this.categoria)
          .then(() => {
            formulario.reset();
            this.showAlert(true, 'success', 'Categoria salva com sucesso!');
            this.categoria = new Categoria();
          })
          .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));
  }

  atualizar(formulario: FormControl){
    this.categoriaService.atualizar(this.categoria.codigo, this.categoria)
          .then(() => {
            formulario.reset();
            this.showAlert(true, 'success', 'Categoria salva com sucesso!');
            this.categoria = new Categoria();
          })
          .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));
  }

  showAlert(mostraAlert: boolean, tipo: string, mensagem: string){
    this.alert.mostrar = mostraAlert;
    this.alert.type = tipo;
    this.alert.mensagem = mensagem;
  }

  closeAlert(){
    this.showAlert(false, '', '');
  }

  get editando(){
    return Boolean(this.categoria.codigo);
  }

}
