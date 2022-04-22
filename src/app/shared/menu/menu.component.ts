import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  li{cursor:pointer}
  `]
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/graficas/barra', texto: 'proposta' },
    { ruta: 'graficas/barra-doble', texto: 'vendes' },
    { ruta: '/graficas/donut', texto: 'inversions' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
