import { Component, OnInit } from '@angular/core';
import { movies } from './../data/movies';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

    movies: Array<any> = movies;

  constructor() { }

  ngOnInit() {
  }

}
