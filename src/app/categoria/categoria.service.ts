import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Categoria } from './../core/model';
import { FinanceiroHttp } from './../seguranca/financeiro-http';
import { CategoriaFiltro } from './modelo-filtro';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriaUrl: string;

  constructor(private http: FinanceiroHttp) {
    this.categoriaUrl = `${environment.baseUrl}/categorias`;
  }

  public filtrar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.paginaAtual.toString());
    params = params.set('size', filtro.quantidadeRegistroPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(this.categoriaUrl, { params }).toPromise()
            .then( response => {
                  const resposta = response;
                  const content = response['content'];

                  const resultado = {
                      categorias: content,
                      totalElementos: resposta['totalElements']
                  };

                  return resultado;
              });
  }

  public buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.categoriaUrl}/${codigo}`).toPromise()
                      .then(response => {
                          const categoria = response;
                          return categoria;
                      });

  }

  public buscarTodas(): Promise<any> {
    return this.http.get(this.categoriaUrl).toPromise()
          .then(response => {
            const content = response['content'];
            return content;
          });
  }

  salvar(categoria: Categoria): Promise<any> {
    return this.http.post(this.categoriaUrl, categoria).toPromise()
          .then(response => {
                const categoria = response;
                return categoria;
              });
  }

  atualizar(codigo: number, categoria: Categoria): Promise<any> {
    return this.http.put(`${this.categoriaUrl}/${codigo}`, categoria).toPromise()
          .then(response => {
                const categoria = response;
                return categoria;
              });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.categoriaUrl}/${codigo}`).toPromise().then(() => null);
  }
}
