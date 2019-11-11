import { FinanceiroHttp } from './financeiro-http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private removeTokenUrl: String;

  constructor(private auth: AuthService,
              private http: FinanceiroHttp) {
    this.removeTokenUrl = `${environment.baseUrl}/tokens/remove`;
  }

  public remover(): Promise<void> {
    return this.http.delete(`${this.removeTokenUrl}`, { withCredentials: true }).toPromise()
        .then(() => {
            this.auth.removerToken();
        });
  }
}
