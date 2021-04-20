// Type aliases vs Interface
type Player = {
  name: string
}

function show(player: Player): void {}

interface Game {
  name: string
}

function play(game: Game): void {}

// Computed properties
type Types = 'finite' | 'infinite';

type Games = {
  [type in Types]: string
}

// Merge
interface User {
  name: string
}

interface User {
  email: string
}

function info(user: User): void {}

info({ name: 'Adam', email: 'adam@wp.pl' });

// Extends

interface Admin extends User {
  is_admin: boolean
  specialpowers?: boolean
}

interface Superadmin extends Admin, User {
  godmode: boolean
}

// Duck typing // structural typing
interface Readable {
  pages: number
}

interface Book {
  pages: number,
  title: string
}

const book: Book = {
  pages: 5,
  title: 'Lord of the Rings'
}

function read(something: Readable): string {
  return `Started reading ${something.pages} pages`;
}

read(book);