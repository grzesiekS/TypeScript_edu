class Movie {
  static type = "movie";

  genre: string;

  constructor(private readonly title: string, genre: string) {
    this.genre = genre;
  }

  getTitle(): string {
    return this.title;
  }
}

console.log(Movie.type);