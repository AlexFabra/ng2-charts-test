import { RouterModule, Routes } from '@angular/router';

import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    children: [
    {path:'barra', component: BarrasComponent},
    {path:'barra-doble', component: BarrasDoblesComponent},
    {path:'donut',component:DonutsComponent},
    {path:'**',redirectTo:'barra'}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
