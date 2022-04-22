import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { CommonModule } from '@angular/common';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { GraficasRoutingModule } from './graficas-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonutsComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
