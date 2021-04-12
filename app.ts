// Parameter types
type Song = { title: string, duration: number, genre: string };
const songObject = { title: "Eye of the tiger", duration: 213, genre: "rock" };

function play(song: Song): string {
  return `Playing now: ${song.title}`
}

play(songObject);

// Optional parameters
function addToPlayList(song: Song, playList = "Default"):string {
  console.log(`Added ${song.title} to playlist: ${playList}`);
  return `Added ${song.title} to playlist: ${playList}`;
}

addToPlayList(songObject, 'Top100');