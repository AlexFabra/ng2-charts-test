import { Component, OnInit } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent implements OnInit {

  serviceSales: number[]=[55,60,75,100,125,131,143,149,155,164,200,254];;
  productSales: number[]=[450,301,364,256,400,439,451,620,250,245,300,364,450,450,301,364,256,400,439,451,620,250,245,300,364,450];
  dayLabels = ['dia 1','dia 2','dia 3','dia 4','dia 5','dia 6','dia 7','dia 8','dia 9','dia 10','dia 11','dia 12','dia 13','dia 14','dia 15','dia 16','dia 17','dia 18','dia 19','dia 20','dia 21','dia 22','dia 23','dia 24','dia 25','dia 26','dia 27','dia 28','dia 29','dia 30'];
  monthLabels = ['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Desembre'];
  labelServices='serveis';
  labelProducts='productes';

  constructor() { }

  ngOnInit(): void {
  }

}
