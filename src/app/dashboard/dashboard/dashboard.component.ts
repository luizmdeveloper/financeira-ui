import { Component, OnInit } from '@angular/core';

import { faCashRegister, faChartBar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { TransacaoService } from './../../transacao/transacao.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Totais, TransacaoCategoria } from './../../core/model';
import * as moment from 'moment/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totais = new Totais();
  faCashRegister = faCashRegister;
  faChartLine = faChartLine;
  faChartBar = faChartBar;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  pieChartLabels: Label[] = [];
  pieChartData: SingleDataSet = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  pierchartColors: Array<any> = [
    {
      backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6',
      '#DD4477', '#3366CC', '#DC3912']
    }
  ]

  constructor(private transacaoService: TransacaoService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    const anoMes = moment(new Date()).format('YYYYMM');

    this.carregarTotais(anoMes);
    this.buscarTransacoesPorCategoria(anoMes);
    this.carregarTransacoesNoPeriodo();
  }

  carregarTotais(anoMes) {
    this.transacaoService.buscarTotaisPorMesAno(anoMes).then(resultado => {
      this.totais.banco = resultado.totalBanco;
      this.totais.carteira = resultado.totalCarteira;
      this.totais.quantidadeTransacoes = resultado.quantidadeTransacoes;
    });
  }

  buscarTransacoesPorCategoria(anoMes) {
    let transacoes: TransacaoCategoria[] = [];
    this.transacaoService.buscarPorCategoria(anoMes).then(resultado => {
        transacoes = resultado;
        transacoes.forEach(transacao => {
          this.pieChartLabels.push(transacao.categoria);
          this.pieChartData.push(Number(transacao.percentual.toPrecision(4.2)));
        });
    });
  }

  carregarTransacoesNoPeriodo() {
    this.transacaoService.buscarNoPeriodo().then(transacoes => {
      transacoes.forEach(transacao => {
        this.barChartLabels.push(transacao.label);
      });
    });
  }

}
