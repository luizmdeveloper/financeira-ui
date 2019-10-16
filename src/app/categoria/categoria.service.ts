import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface CategoriaFiltro{
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  public filtrar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams();

    if (filtro.nome){
      params = params.set('nome', filtro.nome);
    }

    console.log(params);

    const headers = new HttpHeaders().append('Authorization','Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    return this.http.get(this.categoriaUrl, { headers, params }).toPromise()
            .then(response => { response['content'] });
  }
}
