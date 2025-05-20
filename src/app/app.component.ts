import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hideHeader: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      let currentRoute = this.activatedRoute;

      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }

      this.hideHeader = currentRoute.snapshot.data['hideHeader'] || false;
    });
  }
}
