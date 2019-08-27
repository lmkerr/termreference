/* Framework */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Internal */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }