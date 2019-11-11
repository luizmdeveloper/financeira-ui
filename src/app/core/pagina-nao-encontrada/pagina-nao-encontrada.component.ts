import { Component, OnInit } from '@angular/core';

import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.css']
})
export class PaginaNaoEncontradaComponent implements OnInit {

  faLocationArrow = faLocationArrow;

  constructor() { }

  ngOnInit() {
  }

}
