class Movie {

  constructor(private title: string) {}

  get movieTitle(): string {
    return this.title.toUpperCase();
  }

  set movieTitle(title: string) {
    this.title = title;
  }
}

const bestMovieEver = new Movie("Kickboxer");
console.log(bestMovieEver.movieTitle);

bestMovieEver.movieTitle = "Lord of the Ring";
console.log(bestMovieEver.movieTitle);