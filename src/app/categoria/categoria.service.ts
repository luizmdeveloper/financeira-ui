import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { CategoriaFiltro } from './modelo-filtro';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  public filtrar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.paginaAtual.toString());
    params = params.set('size', filtro.quantidadeRegistroPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    const headers = new HttpHeaders().append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    return this.http.get(this.categoriaUrl, { headers, params }).toPromise()
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

  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders().append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    return this.http.delete(`${this.categoriaUrl}/${codigo}`, { headers }).toPromise().then(() => null);
  }

}
