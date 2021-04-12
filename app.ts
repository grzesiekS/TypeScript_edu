let numberToText: (num: number) => string;

numberToText = (num) => num.toString();
numberToText(5);
console.log(typeof numberToText(5));

type Song = { id: number; title: string; duration: number; genre: string}

const songs = [
  { id: 1, title: 'Eye of the tiger', duration: 246, genre: 'rock'},
  { id: 2, title: 'Carry On Wayward Son', duration: 283, genre: 'rock'},
]

type updateSong = (id: number, data: Song) => void | boolean

const update: updateSong = (songId, data) => {
  const index = songs.findIndex(({ id }) => id === songId);
  if(index > -1) {
    songs[index] = data;
  }

  return false;
}