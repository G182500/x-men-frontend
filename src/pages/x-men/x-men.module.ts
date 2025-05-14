import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XMenListComponent } from './x-men-list/x-men-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: XMenListComponent,
    pathMatch: 'full',
    //canActivate: [NgxPermissionsGuard],
  },
];

@NgModule({
  declarations: [XMenListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatTableModule, MatCardModule],
})
export class XMenModule { }
