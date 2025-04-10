import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XMenListComponent } from './x-men-list/x-men-list.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class XMenModule {}
