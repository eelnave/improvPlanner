import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExistingShowsComponent} from './existing-shows/existing-shows.component';
import {ShowBuilderComponent} from './show-builder/show-builder.component';

const routes: Routes = [
  { path: '', redirectTo: '/shows', pathMatch: 'full'},
  { path: 'shows', component: ExistingShowsComponent },
  { path: 'edit', component: ShowBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
