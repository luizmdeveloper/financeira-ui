import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../../seguranca/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  exibindoMenu: boolean;
  faBars = faBars;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
