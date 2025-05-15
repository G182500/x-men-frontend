import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IMutant from 'src/interfaces/Mutant';
import { XMenService } from 'src/services/x-men.service';

@Component({
  selector: 'x-men-list',
  templateUrl: './x-men-list.component.html',
  styleUrls: ['./x-men-list.component.scss'],
})
export class XMenListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'category', 'side'];
  dataSource: IMutant[] = [];

  message: string = "";

  constructor(public router: Router, private xMenService: XMenService) { }

  async ngOnInit() {
    const { data, message } = await this.xMenService.getMutants();

    if (data?.length) this.dataSource = data;
    else {
      this.message = message || "Nenhum mutante encontrado."
    }
  }
}
