import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XMenListComponent } from './x-men-list/x-men-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ComponentsModule } from '../../components/components.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    ComponentsModule,
    MatIconModule,
  ],
})
export class XMenModule {}
