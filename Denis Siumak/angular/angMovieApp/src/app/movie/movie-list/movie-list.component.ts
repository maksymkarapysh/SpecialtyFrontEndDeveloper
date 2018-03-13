import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private movieService: MovieService) {
   }

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.movieService
        .getMovieList()
        .then(result => this.movies = result);
    })
  }

}
