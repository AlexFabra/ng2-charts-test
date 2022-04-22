import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() horizontal: boolean = false;
  @Input() labelName: string = '';
  @Input() labels: string[] = [];
  @Input() chartData: number[] = [];
  public barChartType: ChartType = 'bar';

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: true,
          }
        }
      };
    }
    this.barChartData = {
      labels:this.labels,
      datasets: [
        { data: this.chartData, label: this.labelName},
      ]
    };
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  // public barChartData: ChartData<'bar'> = {
  //   labels:this.labels,
  //   datasets: [
  //     { data:this.chartData, label: this.labelName }
  //   ]
  // };
  public barChartData: ChartData<'bar'> = {
    labels:['jo'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40, 66, 33, 35, 45, 23], label: this.labelName, backgroundColor: '#FFC107', hoverBackgroundColor: '#AACCDD' },
      { data: [28, 48, 40, 19, 86, 27, 90, 24, 33, 54, 62, 43], label: 'gastos', backgroundColor: '#FF5722', hoverBackgroundColor: '#AACCDD' },
      { data: [11, 15, 9, 12, 16, 14, 16, 11, 10, 11, 12, 17], label: 'pérdues', backgroundColor: '#F4ACAD', hoverBackgroundColor: '#AACCDD' }
    ]
  };
}
