import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MOVIES } from "../list";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies = MOVIES;

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
