import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { PageNotFoundComponent } from 'src/pages/page-not-found/page-not-found.component';
import { XMenListComponent } from 'src/pages/x-men/x-men-list/x-men-list.component';
import { AuthGuard } from 'src/services/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'x-men/list',
    component: XMenListComponent,
    canActivate: [AuthGuard],
  },
  //{ path: 'x-men/new', component: pending },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
