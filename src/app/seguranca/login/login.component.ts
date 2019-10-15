import { Component, OnInit } from '@angular/core';

import { OauthService } from './../oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OauthService) { }

  ngOnInit() { }

  login(email: string, senha: string){
    this.oauthService.login(email, senha);
  }
}
