import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MutantDetailsComponent } from './mutant-details/mutant-details.component';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, MutantDetailsComponent],
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [HeaderComponent, MutantDetailsComponent]
})
export class ComponentsModule { }
