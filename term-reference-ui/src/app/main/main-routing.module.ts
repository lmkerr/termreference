import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Internal */
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: MainComponent, loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }