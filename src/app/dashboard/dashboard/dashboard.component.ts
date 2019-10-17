import { Component, OnInit } from '@angular/core';

import { faCashRegister, faChartBar, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faCashRegister = faCashRegister;
  faChartLine = faChartLine;
  faChartBar = faChartBar;

  constructor() { }

  ngOnInit() {
  }

}
