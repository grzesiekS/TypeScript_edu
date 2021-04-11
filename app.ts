// Type assertion
type Game = { title: string; genre: string; released: boolean }

const game: Game = { 
  title: 'Grand Theft Auto V',
  genre: 'Action',
  released: true,
}

const serializedGame = JSON.stringify(game);

const gameObj = JSON.parse(serializedGame) as Game;

const input = document.querySelector('.input') as HTMLInputElement;
console.log(input.value);

// Type aliases
type CoffeeSize = "medium" | "large";
let coffeeSize: CoffeeSize;

function order(coffee: CoffeeSize): string {
  return `Ordered ${coffee}`;
}