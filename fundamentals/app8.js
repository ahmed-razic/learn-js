//for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
let j = 0;

while (j <= 10) {
  console.log(j);
  j++;
}

do {
  console.log(i);
  i++;
} while (i <= 10);

let cars = ['VW', 'Audi', 'BMW', 'Ford', 'Opel', 'Mazda', 'Toyota'];

console.log('Loop through array');
for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  console.log(element);
}

console.log('forEach through array');

cars.forEach(function (car) {
  console.log(car);
});

console.log('forEach through array arrow 1');
cars.forEach((car) => {
  console.log(car);
});

console.log('forEach through array arrow 2');
cars.forEach((car) => console.log(car));

const users = [
  { id: 1, name: 'Ahmed1', age: 16 },
  { id: 2, name: 'Ahmed2', age: 26 },
  { id: 3, name: 'Ahmed3', age: 36 },
  { id: 4, name: 'Ahmed4', age: 46 },
  { id: 5, name: 'Ahmed5', age: 56 },
  { id: 6, name: 'Ahmed6', age: 66 },
  { id: 7, name: 'Ahmed7', age: 76 },
];

const names = users.map((user) => user.name);
console.log(names);

const ids = users.map((user) => user.id);
console.log(ids);

for (let x in users[0]) {
  console.log(`${x} : ${users[0][x]}`);
}
