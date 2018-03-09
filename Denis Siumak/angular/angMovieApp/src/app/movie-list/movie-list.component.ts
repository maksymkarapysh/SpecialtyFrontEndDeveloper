import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
//import { MOVIES } from "../list";
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = this.movieService.getMovieList();
  
  constructor(private movieService: MovieService) {
   }

  ngOnInit() {
    this.movieService.movieImageNo();
  }

}
