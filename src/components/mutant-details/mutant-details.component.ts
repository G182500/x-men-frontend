import { Component, Input, OnInit } from '@angular/core';
import IMutant from 'src/interfaces/mutant';

@Component({
  selector: 'app-mutant-details',
  templateUrl: './mutant-details.component.html',
  styleUrls: ['./mutant-details.component.scss'],
})
export class MutantDetailsComponent implements OnInit {
  side?: IMutant['side'];
  sides: string[] = ['GOOD', 'NEUTRAL', 'EVIL']; // get from API

  constructor() {}

  @Input() selectedMutant: IMutant | null = null;

  ngOnInit() {}

  search(text: any) {
    console.log(text);
  }

  select(text: any) {
    console.log(text);
  }

  displayFn(side: string): string {
    return side.toLocaleLowerCase();
  }
}
