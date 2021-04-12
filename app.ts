// Any type
let password: any;
password = 1234;

password='test';

function reverse(input: string | any[]) {};

// Void type

const message = 'I know your password, bro!';

const show = (messageInput: string): void => {
  console.log(messageInput);
}

show(message);

// Never type
function error(messageInput: string): never {
  throw new Error(messageInput);
}