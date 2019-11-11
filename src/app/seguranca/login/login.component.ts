import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Alert } from './../../core/model';
import { AuthService } from '../auth.service';
import { ErroHandlerService } from './../../core/erro-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private alert: Alert;

  constructor(private authService: AuthService,
              private erroHandlerService: ErroHandlerService,
              private router: Router
              ) {
    this.alert = new Alert();
  }

  ngOnInit() { }

  login(email: string, senha: string){
    this.authService.login(email, senha)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => this.showAlert(true, 'danger', this.erroHandlerService.handle(erro)));
  }

  private showAlert(mostrar: boolean, tipo: string, mensagem: string) {
    this.alert.mostrar = mostrar;
    this.alert.type = tipo;
    this.alert.mensagem = mensagem;
  }

  private closeAlert() {
    this.showAlert(false, '', '');
  }
}
