import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../movie";
import { MOVIES } from "../list";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.less']
})
export class MovieItemComponent implements OnInit {

  movies = MOVIES;

  @Input('movie') movieItem: Movie;

  constructor() {

  }

  ngOnInit() {
    this.movieImageNo();
    console.log(this.movies);
  }

  movieImageNo(): void {
    this.movies.forEach(function (item) {
      if (item.posterurl == "") {
        item.posterurl = "http://kasesesmu.lv/wp-content/uploads/2017/01/no-image.png";
      } else {
        item.posterurl = item.posterurl;
      }
    })
  }

}
