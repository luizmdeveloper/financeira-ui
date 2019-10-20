import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CategoriaService } from './../categoria.service';
import { Categoria, Alert } from './../../core/model';
import { ErroHandlerService } from './../../core/erro-handler.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  alert: Alert;
  categoria = new Categoria;

  constructor(private categoriaService: CategoriaService,
              private erroHandlerService: ErroHandlerService) { }

  ngOnInit() {
    this.alert = new Alert();
  }

  salvar(formulario: FormControl) {
    this.categoriaService.salvar(this.categoria)
      .then(categoriaSalva => {
        formulario.reset();
        this.showAlert(true, 'success', 'Categoria salva com sucesso!');
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

}
