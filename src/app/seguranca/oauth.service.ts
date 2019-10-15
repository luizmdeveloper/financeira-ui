import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  oauth2Url = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Promise<void>{
    const headers = new HttpHeaders();
    headers.append('Authorization','Basic YW5ndWxhcjpAbmd1bEByMA==');
    headers.append('Content-Type','application/x-www-form-urlencoded');

    const body = `username=${email}&password=${senha}&grant_type=password`

    return this.http.post(this.oauth2Url,body, { headers })
            .toPromise()
              .then(
                response => {
                  console.log('response', response);
                })
              .catch(erro => {
                  console.log('erro', erro);
              });
  }
}
