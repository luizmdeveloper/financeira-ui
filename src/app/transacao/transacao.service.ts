import { FinanceiroHttp } from './../seguranca/financeiro-http';
import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { TransacaoFiltro } from './model-filtro';
import { environment } from './../../environments/environment';

import * as moment from 'moment';
import { Transacao } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private transacaoUrl: string;

  constructor(private http: FinanceiroHttp) {
    this.transacaoUrl = `${environment.baseUrl}/transacoes`;
  }

  filtrar(filtro: TransacaoFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('resumo', '');
    params = params.set('page', filtro.paginaAtual.toString());
    params = params.set('size', filtro.quantidadeRegistroPorPagina.toString());

    if (filtro.categoria) {
      params = params.set('categoria', filtro.categoria.toString());
    }

    if (filtro.conta) {
      params = params.set('conta', filtro.conta.toString());
    }

    if (filtro.observacao) {
      params = params.set('observacao', filtro.observacao);
    }

    if (filtro.dataDe) {
      params = params.set('emissaoDe', moment(filtro.dataDe).format('YYYY-MM-DD'));
    }

    if (filtro.dataAte) {
      params = params.set('emissaoAte', moment(filtro.dataAte).format('YYYY-MM-DD'));
    }

    return this.http.get(this.transacaoUrl, { params }).toPromise()
                  .then(response => {
                    const resposta = response;
                    const content = resposta['content'];

                    const resultado = {
                      transacoes: content,
                      totalElementos: response['totalElements']
                    };

                    return resultado;
                  });
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.transacaoUrl}/${codigo}`).toPromise()
                .then(response => {
                  return response; });
  }

  salvar(transacao: Transacao): Promise<Transacao> {
    return this.http.post(this.transacaoUrl, transacao).toPromise()
                  .then(response => {
                    return response as Transacao;
                  });
  }

  atualizar(codigo: number, transacao: Transacao): Promise<Transacao> {
    return this.http.put(`${this.transacaoUrl}/${codigo}`, transacao).toPromise()
                  .then(response => {
                    return response as Transacao;
                  });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.transacaoUrl}/${codigo}`).toPromise().then(() => null);
  }

  buscarTotaisPorMesAno(anoMes: number): Promise<any> {
    return this.http.get(`${this.transacaoUrl}/noMesAno/${anoMes}`).toPromise()
                  .then(response => {
                      const resultado = {
                        totalCarteira: response['totalCarteira'],
                        totalBanco: response['totalBanco'],
                        quantidadeTransacoes: response['quantidadeTransacoes']
                      };

                      return resultado;
                  })
  }

  buscarPorCategoria(anoMes: number): Promise<any> {
    return this.http.get(`${this.transacaoUrl}/porCategoria/${anoMes}`).toPromise()
                  .then(response => {
                      return response;
                  });

  }

  buscarNoPeriodo(): Promise<any> {
    let params = new HttpParams();

    params = params.set('anoMesInicial', '201901');
    params = params.set('anoMesFinal', '201912');

    return this.http.get(`${this.transacaoUrl}/periodo`, { params }).toPromise()
                  .then(response => {
                    return response;
                  });
  }

  conciliar(codigo: number, conciliado: boolean): Promise<void> {
    return this.http.put(`${this.transacaoUrl}/${codigo}/conciliado`, !conciliado).toPromise().then(() => null);
  }

}
