import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueriesComponent } from './pages/queries/queries.component';
import { RespondComponent } from './pages/respond/respond.component';

const routes: Routes = [
  { path: '', component: QueriesComponent },
  { path: 'respond/:id', component: RespondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
