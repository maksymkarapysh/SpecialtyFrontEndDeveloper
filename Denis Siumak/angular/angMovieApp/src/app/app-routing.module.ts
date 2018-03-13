import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { HomeComponent, MovieListComponent, MovieDetailComponent } from './index';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent  },
    { path: 'movie-list', component: MovieListComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
  ])],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }