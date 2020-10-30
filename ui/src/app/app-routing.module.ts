import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueriesComponent } from './pages/queries/queries.component';

const routes: Routes = [
  { path: '', component: QueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
