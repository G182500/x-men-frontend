import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IMutant from 'src/interfaces/mutant';

@Component({
  selector: 'app-mutant-details',
  templateUrl: './mutant-details.component.html',
  styleUrls: ['./mutant-details.component.scss'],
})
export class MutantDetailsComponent implements OnChanges {
  form = new FormGroup({
    category: new FormControl('', [Validators.required]),
    side: new FormControl('', [Validators.required]),
  });

  @Input() selectedMutant!: IMutant;

  // @Input() sides: string[] = [];
  // @Input() categories: string[] = [];

  sides: string[] = ['GOOD', 'NEUTRAL', 'EVIL']; // get from API

  categories: string[] = [
    'ALPHA LEVEL',
    'BETA LEVEL',
    'DELTA LEVEL',
    'EPSILON LEVEL',
    'GAMMA LEVEL',
    'OMEGA LEVEL',
  ];

  filteredCategories = this.categories;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedMutant']) {
      this.form.setValue({
        category: this.selectedMutant.category,
        side: this.selectedMutant.side.toUpperCase(),
      });
    }
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter((item) =>
      item.includes(this.form.controls.category.value!.toUpperCase())
    );
  }

  displayFn(text: string): string {
    return text.toUpperCase();
  }
}
