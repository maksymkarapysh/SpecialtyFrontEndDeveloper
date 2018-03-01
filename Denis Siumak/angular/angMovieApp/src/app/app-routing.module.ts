import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { MainComponent, MovieListComponent } from './index';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'movie-list', component: MovieListComponent }
  ])],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }