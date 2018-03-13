import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../movie";
//import { MOVIES } from "../list";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.less']
})
export class MovieItemComponent implements OnInit {

  @Input('movie') movieItem: Movie;
  
  constructor(private movieService: MovieService ) {
  }

  ngOnInit() {
  }

}
