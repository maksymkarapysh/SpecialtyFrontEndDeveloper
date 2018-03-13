export class Movie {
  constructor(
    public id: string,
    public title: string,
    public year: string,
    public releaseDate: string,
    public storyline: string,
    public imdbRating: number,
    public posterurl: string) {}
}