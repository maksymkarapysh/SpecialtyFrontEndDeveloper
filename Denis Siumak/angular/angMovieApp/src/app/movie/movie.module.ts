import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { MovieService } from './movie.service';

import {
  MovieListComponent,
  MovieItemComponent,
  MovieDetailComponent
} from '../index';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [MovieListComponent,
                 MovieItemComponent,
                 MovieDetailComponent
  ],
  providers: [MovieService]
})
export class MovieModule { }
