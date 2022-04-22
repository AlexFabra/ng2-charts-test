import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  activePrevision: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40, 66, 33, 35, 45, 23], label: 'inversions', backgroundColor: '#FFC107', hoverBackgroundColor: '#AACCDD' },
      { data: [28, 48, 40, 19, 86, 27, 90, 24, 33, 54, 62, 43], label: 'gastos', backgroundColor: '#FF5722', hoverBackgroundColor: '#AACCDD' },
      { data: [11, 15, 9, 12, 16, 14, 16, 11, 10, 11, 12, 17], label: 'pérdues', backgroundColor: '#F4ACAD', hoverBackgroundColor: '#AACCDD' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //TODO: mostrar info detallada
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //TODO: mostrar info bàsica
  }

  public randomize(): void {
    if (!this.activePrevision) {
      this.activePrevision = true;
      console.log(this.barChartData.datasets[0].data)
      this.barChartData.datasets[0].data.forEach((e: number, i) => { this.barChartData.datasets[0].data[i] = e / 1.1 });
      this.barChartData.datasets[1].data.forEach((e: number, i) => { this.barChartData.datasets[1].data[i] = e * 1.1 });

    } else {
      this.activePrevision = false;
      console.log(this.barChartData.datasets[0].data)
      this.barChartData.datasets[0].data.forEach((e: number, i) => { this.barChartData.datasets[0].data[i] = e * 1.1 });
      this.barChartData.datasets[1].data.forEach((e: number, i) => { this.barChartData.datasets[1].data[i] = e / 1.1 });

    }

    this.chart?.update();
  }

}
