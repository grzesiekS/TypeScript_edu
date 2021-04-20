interface Playable {
  name: string,
  play?(): string
}

interface Play {
  (media: Playable): string
}

const playMedia: Play = function play(media: Playable): string {
  if(media.play) {
    console.log(media.play());
    return media.play();
  }
  console.log(`Can't play ${media.name}`);
  return `Can't play ${media.name}`;
}

const movie: Playable = {
  name: 'Lord of the Rings',
  play() {
    return `Playing ${this.name}`
  },
}

playMedia(movie);