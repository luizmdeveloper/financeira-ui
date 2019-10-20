import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransacaoCategoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  transacaoUrl = 'http://localhost:8080/transacoes'

  constructor(private http: HttpClient) { }

  buscarTotaisPorMesAno(anoMes: number): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');

    return this.http.get(`${this.transacaoUrl}/noMesAno/${anoMes}`, { headers }).toPromise()
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
    const headers = new HttpHeaders().append('Authorization', 'Basic bHVpem1hcmlvQGluZm9yaW8uY29tLmJyOmFkbWlu');
    return this.http.get(`${this.transacaoUrl}/porCategoria/${anoMes}`, { headers }).toPromise()
                  .then(response => {
                      return response;
                  })

  }
}
