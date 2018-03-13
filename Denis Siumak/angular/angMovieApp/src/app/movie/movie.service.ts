import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { Observable } from 'rxjs/Observable';
import { MovieListComponent } from '..';

let movieList: Array<Movie> = [
  {
    id: "1",
    title: "Avengers: Infinity War",
    year: "2018",
    releaseDate: "2018-04-25",
    storyline: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain. Written by Marvel Studios",
    imdbRating: 0,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjA1OTMxOV5BMl5BanBnXkFtZTgwMzM1NDcyNDM@._V1_SY377_CR0,0,254,377_AL_.jpg"
  },
  {
    id: "2",
    title: "La novia del desierto",
    year: "2017",
    releaseDate: "2017-09-21",
    storyline: "It tells the story of Teresa, a 54-year-old woman who works as a domestic employee in a family home in Buenos Aires. For decades he has taken refuge in the routine of his tasks, but now that the family has decided to sell the house, his life begins to totter.                Written by\nSebastian Incaurgarat",
    imdbRating: 6.7,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMwMDliN2UtNjFjMC00YmZlLWIzY2UtYWI4ODNhNjE4ZDhhXkEyXkFqcGdeQXVyMjQ0NzgwNzY@._V1_SY370_SX250_AL_.jpg"
  },
  {
    id: "3",
    title: "Les gardiennes",
    year: "2017",
    releaseDate: "2017-12-06",
    storyline: "1915. Life at the Paridier farm has changed dramatically since the men of the family (Constant, Georges and Clovis) left home to go and fight on the front line. Hortense Sandrail, Henri and Constant's mother and Clovis' mother-in-law, has taken over courageously but, although helped by her daughter Solange, she finds it hard to get by with all the workload. When harvest time comes, she makes up her mind to hire a farmhand but she is too late and no man is available. The mayor then recommends her an orphan named Francine Riant, who could do. Hortense agrees and the choice soon appears a blessing, as the girl proves perfect: well-mannered and respectful, she is also a hard worker who does not balk at any task. Hortense, Solange and her form an effective trio, who make the most of the situation. One day, Georges comes back to the farm on leave and he falls in love with Francine.                Written by\nGuy Bellinger",
    imdbRating: 7.3,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmYzODU2ZDQtODVkZi00MjM3LTk0ZjAtZmUxNjc3N2IwYjVjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY500_CR0,0,367,500_AL_.jpg"
  },
  {
    id: "4",
    title: "Life of the Party",
    year: "2018",
    releaseDate: "2018-05-11",
    storyline: "When her husband suddenly dumps her, longtime dedicated housewife Deanna turns regret into re-set by going back to college - landing in the same class and school as her daughter, who's not entirely sold on the idea. Plunging headlong into the campus experience, the increasingly outspoken Deanna -- now Dee Rock -- embraces freedom, fun, and frat boys on her own terms, finding her true self in a senior year no one ever expected.                Written by\nWarner Bros. Pictures",
    imdbRating: 0,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZDdkN2ZmNDktOGQyNC00NzgyLWFiNmItMDMyZDRmYWFjNzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg"
  },
  {
    id: "5",
    title: "Breaking In",
    year: "2018",
    releaseDate: "2018-05-11",
    storyline: "The film follows single mother Shaun Russell (Union) who, after the sudden death of her father, takes her two children, Glover and Jasmine, to his Malibu mansion in order to settle his estate. But at the mansion are four criminal convicts intent on finding the deceased’s safe and making off with its goods.",
    imdbRating: 0,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNWQ3OTRjNTUtM2JiNC00NTZjLTg4YjAtMWI5NmZhOGJlZDA5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY500_CR0,0,315,500_AL_.jpg"
  },
  {
    id: "6",
    title: "Beast",
    year: "2017",
    releaseDate: "2018-04-27",
    storyline: "A troubled woman living in an isolated community finds herself pulled between the control of her oppressive family and the allure of a secretive outsider suspected of a series of brutal murders.",
    imdbRating: 7.1,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BYjJlMzU2YmMtYjlkOS00ZjMzLWFkOWMtZGZhY2IzZTc3Njk1XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg"
  },
  {
    id: "7",
    title: "Book Club",
    year: "2018",
    releaseDate: "2018-05-18",
    storyline: "Four lifelong friends have their lives forever changed after reading 50 Shades of Grey in their monthly book club.",
    imdbRating: 0,
    posterurl: ""
  },
  {
    id: "8",
    title: "Untitled Deadpool Sequel",
    year: "2018",
    releaseDate: "2018-05-16",
    storyline: "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.                Written by\nTwentieth Century Fox",
    imdbRating: 0,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzczMjUwMzk0M15BMl5BanBnXkFtZTgwNjY4OTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
  },
  {
    id: "9",
    title: "Show Dogs",
    year: "2018",
    releaseDate: "2018-05-18",
    storyline: "Max, a macho, solitary Rottweiler police dog is ordered to go undercover as a primped show dog in a prestigious Dog Show, along with his human partner, to avert a disaster from happening.",
    imdbRating: 0,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZDdjOWMwNjYtNWE3Zi00Y2JjLTgzODItNTg1YjNjM2U3ZWMyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg"
  },
  {
    id: "10",
    title: "Solo: A Star Wars Story",
    year: "2018",
    releaseDate: "2018-05-23",
    storyline: "Board the Millennium Falcon and journey to a galaxy far, far away in 'Solo: A Star Wars Story,' an adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga's most unlikely heroes.                Written by\nWalt Disney Studios",
    imdbRating: 0,
    posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMjAyMTI5NF5BMl5BanBnXkFtZTgwOTAxMTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
  }
]

let moviePromise = Promise.resolve(movieList);


@Injectable()
export class MovieService {
  

  getMovieList(): Promise<Movie[]> {
    return moviePromise;
  }

  getMovie(id: string): Promise<Movie> {
    return moviePromise
    .then(movie => movie.find(item => item.id == id))
  }

  movieImageNo(): void {
    movieList.forEach(function (item) {
      if (item.posterurl === "") {
        item.posterurl = "http://kasesesmu.lv/wp-content/uploads/2017/01/no-image.png";
      } else {
        item.posterurl = item.posterurl;
      }
    })
  }

    constructor() { }

}
