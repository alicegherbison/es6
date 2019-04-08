import {
  apiKey as key,
  url,
  sayHi,
  age,
  garfield
} from './src/config';
import User, { createURL, gravatar } from './src/user';

console.log(key);

sayHi('Alice');

console.log(url);
console.log(`${garfield} is ${age} years old`);

const alice = new User('Alice', 'hello@email.com', 'website.com');
console.log(alice);

const profile = createURL(alice.name);
console.log(profile);

const image = gravatar(alice.email);
console.log(image);
