import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private oauth2Url: string;
  public jwtPayLoad: any;

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) {
    this.carregarToken();
    this.oauth2Url = `${environment.baseUrl}/oauth/token`;
  }

  private carregarToken() {
    const token = localStorage.getItem('token_ir');

    if (token) {
      this.armazenarToken(token);
    }
  }

  private armazenarToken(token: string) {
    this.jwtPayLoad = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token_ir', token);
  }

  public login(email: string, senha: string): Promise<void>{
    const headers = new HttpHeaders().append('Authorization','Basic YW5ndWxhcjpAbmd1bEByMA==')
                                     .append('Content-Type','application/x-www-form-urlencoded');

    const body = `username=${email}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauth2Url,body, { headers, withCredentials: true }).toPromise()
              .then(response => {
                const token = response['access_token'];
                this.armazenarToken(token);
              })
              .catch(httpResponseErro => {
                if (httpResponseErro.status === 400) {
                  if (httpResponseErro.error.error === 'invalid_grant') {
                    return Promise.reject('Usuário e/ou senha inválida!');
                  }
                }

                return Promise.reject(httpResponseErro);
              });
  }

  public obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders().append('Authorization','Basic YW5ndWxhcjpAbmd1bEByMA==')
                                     .append('Content-Type','application/x-www-form-urlencoded');

    const body = `grant_type=refresh_token`;

    return this.http.post(this.oauth2Url, body, { headers, withCredentials: true }).toPromise()
            .then(response => {
                const token = response['access_token'];
                this.armazenarToken(token);

                return Promise.resolve(null);
              })
            .catch(erro => {
              return Promise.resolve(null);
            });
  }

  public isAccessTokenInvalido() {
    const token = localStorage.getItem('token_ir');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  public temPermissao(permissao: string) {
    return this.jwtPayLoad && this.jwtPayLoad.authorities.includes(permissao);
  }

  public removerToken() {
    localStorage.removeItem('token_ir');
    this.jwtPayLoad = null;
  }

}
