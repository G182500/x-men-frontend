import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import IMutant from 'src/interfaces/mutant';
import { XMenService } from 'src/services/x-men.service';

@Component({
  selector: 'x-men-list',
  templateUrl: './x-men-list.component.html',
  styleUrls: ['./x-men-list.component.scss'],
})
export class XMenListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'category', 'side'];
  dataSource = new MatTableDataSource<IMutant>();

  selectedMutant: IMutant | null = null;
  message: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public router: Router, private xMenService: XMenService) {}

  async ngOnInit() {
    const { data, message } = await this.xMenService.getMutants();

    if (data?.length) this.dataSource.data = data;
    else this.message = message || 'Nenhum mutante encontrado.';
  }

  selectRow(row: IMutant) {
    this.selectedMutant = row;
  }
}
