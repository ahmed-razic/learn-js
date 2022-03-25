//Primitive types

const name = 'Ahmed';
console.log(typeof name);

const num = 2;
console.log(typeof num);

const isOpen = true;
console.log(typeof isOpen);

const car = null;
console.log(typeof car);

const myText = 'ddd';
//const myText2;

let myText2;
console.log(typeof myText2);

const sym = Symbol();
console.log(typeof sym);

console.log(sym.valueOf());
console.log(sym.toString());

//Reference type

const hobbies = [1, 2, 3, 4, 5];
const address = {
  city: 'Sarajevo',
  state: 'BiH',
};
const today = new Date();

console.log(today);

console.log(typeof hobbies, typeof address, typeof today);
