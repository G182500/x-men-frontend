import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentPath: string | null = null;
  routes = [
    { title: "Home", path: "/home" },
    { title: "Lista de Mutantes", path: "/list" },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const nav = event as NavigationEnd;
      this.currentPath = nav.urlAfterRedirects;
    });
  }
}
