import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Conta } from './../core/model';
import { Contafiltro } from './modelo.filtro';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  contaUrl = 'http://localhost:8080/contas';

  constructor(private http: HttpClient) { }

  filtrar(filtro: Contafiltro) {
    let params = new HttpParams();
    const headers =  new HttpHeaders().append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    params = params.set('page', filtro.paginaAtual.toString());
    params = params.set('size', filtro.quantidadeRegistroPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(this.contaUrl, { headers, params }).toPromise()
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
    const headers = new HttpHeaders()
                        .append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    return this.http.get(`${this.contaUrl}/${codigo}`, {headers}).toPromise()
                .then(resultado => {
                    const conta = resultado;

                    return conta;
                });
  }

  buscarTodos(): Promise<any> {
    const headers = new HttpHeaders()
                        .append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    return this.http.get(`${this.contaUrl}`, {headers}).toPromise()
                .then(resultado => {
                    const conta = resultado['content'];
                    return conta;
                });
  }

  atualizar(codigo: number, conta: Conta): Promise<any> {
    const headers = new HttpHeaders()
                        .append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu')
                        .append('Content-Type', 'application/json');

    return this.http.put(`${this.contaUrl}/${codigo}`, conta, {headers}).toPromise()
                .then(resposta => {
                  const conta = resposta;

                  return conta;
                });
  }

  salvar(conta: Conta): Promise<any> {
    const headers = new HttpHeaders()
                        .append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu')
                        .append('Content-Type', 'application/json');

    return this.http.post(this.contaUrl, conta, {headers}).toPromise()
                .then(resposta => {
                  const conta = resposta;

                  return conta;
                });
  }

}
