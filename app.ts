let message: string;

let counter = 0;
counter = 'hello';

const numbers = [0, 1, 2];
const array = [0, 1, 'text'];

function add(x: number, y: number): number {
  return x + y;
}

// Contextual Typing
window.addEventListener('click', e => {
  console.log(e.clientX);
})