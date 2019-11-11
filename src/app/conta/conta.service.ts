import { Injectable } from '@angular/core';
import {  HttpParams } from '@angular/common/http';

import { Conta } from './../core/model';
import { Contafiltro } from './modelo.filtro';
import { FinanceiroHttp } from './../seguranca/financeiro-http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private contaUrl: string;

  constructor(private http: FinanceiroHttp) { }

  filtrar(filtro: Contafiltro) {
    let params = new HttpParams();

    params = params.set('page', filtro.paginaAtual.toString());
    params = params.set('size', filtro.quantidadeRegistroPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(this.contaUrl, { params }).toPromise()
                .then(response => {
                    const contas = response['content'];
                    const totalElementos = response['totalElements'];

                    const resultado = {
                      contas: contas,
                      totalRegistro: totalElementos
                    }

                    return resultado;
                });

  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.contaUrl}/${codigo}`).toPromise()
                .then(resultado => {
                    const conta = resultado;

                    return conta;
                });
  }

  buscarTodos(): Promise<any> {
    return this.http.get(`${this.contaUrl}`).toPromise()
                .then(resultado => {
                    const conta = resultado['content'];
                    return conta;
                });
  }

  atualizar(codigo: number, conta: Conta): Promise<any> {
    return this.http.put(`${this.contaUrl}/${codigo}`, conta).toPromise()
                .then(resposta => {
                  const conta = resposta;

                  return conta;
                });
  }

  salvar(conta: Conta): Promise<any> {
    return this.http.post(this.contaUrl, conta).toPromise()
                .then(resposta => {
                  const conta = resposta;

                  return conta;
                });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.contaUrl}/${codigo}`).toPromise()
                 .then(() => null);
  }

}
