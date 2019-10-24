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

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Crédito',
      backgroundColor: 'rgba(0,128,0,0.8)',
      borderColor: 'rgba(0,128,0,1)',
      hoverBackgroundColor: 'rgba(0,128,0,1)'
    },
    {
      data: [],
      label: 'Débito',
      backgroundColor: 'rgba(139,0,0,0.8)',
      borderColor: 'rgba(139,0,0,1)',
      hoverBackgroundColor: 'rgba(139,0,0,1)'
    }
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
  ];

  pieChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor(private transacaoService: TransacaoService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    const anoMes = moment(new Date()).format('YYYYMM');

    this.carregarTotais(anoMes);
    this.buscarTransacoesPorCategoria(anoMes);
    this.carregarTransacoesNoPeriodo();

    this.carregarDados();
  }

  carregarDados() {
    setInterval( () => {
      const anoMes = moment(new Date()).format('YYYYMM');

      this.carregarTotais(anoMes);
      this.buscarTransacoesPorCategoria(anoMes);
      this.carregarTransacoesNoPeriodo();
    }, 7000);
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
    this.pieChartLabels = [];
    this.pieChartData = [];

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
      let dataCredito = [];
      let dataDebito = [];

      this.barChartData[0].data = dataCredito;
      this.barChartData[0].label = '';
      this.barChartData[1].data = dataDebito;
      this.barChartData[1].label = '';
      this.barChartLabels = [];

      transacoes.forEach(transacao => {
        if (this.barChartLabels.indexOf(transacao.label) < 0) {
          this.barChartLabels.push(transacao.label);
          dataCredito.push(0);
          dataDebito.push(0);
        }
      });

      transacoes.forEach(transacao => {
        if (transacao.tipoTransacao) {
          const posicao = this.barChartLabels.indexOf(transacao.label);

          if (transacao.tipoTransacao === 'C') {
            dataCredito[posicao] = transacao.valor;
          } else {
            dataDebito[posicao] = transacao.valor;
          }
        }
      });

      this.barChartData[0].data = dataCredito;
      this.barChartData[0].label = 'Crédito';

      this.barChartData[1].data = dataDebito;
      this.barChartData[1].label = 'Débito';
    });
  }

}
