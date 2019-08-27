/* Framework */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(mod => MainModule) },
  { path: '**', loadChildren: () => import('./errors/errors.module').then(mod => mod.ErrorsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }