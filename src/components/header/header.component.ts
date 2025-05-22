import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routes = [
    { title: 'Home', path: '/' },
    { title: 'Lista de Mutantes', path: '/x-men/list' },
  ];
}
