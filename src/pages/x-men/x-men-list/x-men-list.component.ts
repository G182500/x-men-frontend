import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'x-men-list',
  templateUrl: './x-men-list.component.html',
  styleUrls: ['./x-men-list.component.scss'],
})
export class XMenListComponent implements OnInit {
  user: any;

  constructor(public router: Router) {}

  async ngOnInit() {
    //if (!this.user) this.router.navigate(['/']);
  }
}
