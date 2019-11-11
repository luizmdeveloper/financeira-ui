import { Component, OnInit } from '@angular/core';

import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nao-autorizado',
  templateUrl: './nao-autorizado.component.html',
  styleUrls: ['./nao-autorizado.component.css']
})
export class NaoAutorizadoComponent implements OnInit {

  faBan = faBan;

  constructor() { }

  ngOnInit() {
  }

}
