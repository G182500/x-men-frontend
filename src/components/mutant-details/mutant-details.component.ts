import { Component, Input, OnInit } from '@angular/core';
import IMutant from 'src/interfaces/mutant';

@Component({
  selector: 'app-mutant-details',
  templateUrl: './mutant-details.component.html',
  styleUrls: ['./mutant-details.component.scss'],
})
export class MutantDetailsComponent {
  constructor() { }

  @Input() selectedMutant: IMutant | null = null;
}
