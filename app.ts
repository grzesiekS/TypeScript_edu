class User {
  constructor(private name: string) {}

  sayHello(): string {
    return this.name;
  }
}

const user = new User('Adam');

user.sayHello();