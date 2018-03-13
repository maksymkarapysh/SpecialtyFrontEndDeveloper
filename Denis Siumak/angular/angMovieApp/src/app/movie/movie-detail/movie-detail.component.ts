import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Location } from "@angular/common";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {

    this.getMovie(); 
    this.movieService.movieImageNo();
  }
  getMovie(): void {
    const id = this.route.snapshot.params['id'];
    this.movieService.getMovie(id)
      .then(movie => this.movie = movie);
  }

  goBackLocation(): void {
    this.location.back();
  }
}
