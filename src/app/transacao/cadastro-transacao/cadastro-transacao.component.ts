import { Component, OnInit } from '@angular/core';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro-transacao',
  templateUrl: './cadastro-transacao.component.html',
  styleUrls: ['./cadastro-transacao.component.css']
})
export class CadastroTransacaoComponent implements OnInit {

  faCalendar = faCalendar;

  constructor() { }

  ngOnInit() {
  }

}
