interface Playable {
  name: string,
  play(): string
}

class Movie implements Playable {
  constructor(public name: string) {}

  play(): string {
    return `Playing ${this.name}`
  }
}

function play(media: Playable): string {
  if(media.play) {
    console.log(media.play());
    return media.play();
  }
  console.log(`Can't play ${media.name}`);
  return `Can't play ${media.name}`;
}

const movie: Playable = new Movie('Lord of the Rings');

play(movie);