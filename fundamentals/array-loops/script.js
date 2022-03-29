const cars = ['VW', 'AUDI', 'BMW', 'MAZDA', 'TOYOTA'];

//loop through array
for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  console.log(element);
}

//foreach
cars.forEach((car, index, array) => {
  console.log(index, car);
  console.log(array);
});

cars.forEach(function (car) {
  console.log(car.length);
});

const user = [
  { id: 1, a: 1, b: 2, c: 3 },
  { id: 2, aa: 11, bb: 22, cc: 33 },
  { id: 3, aaa: 111, bbb: 222, ccc: 333 },
];

const user10 = { aaa: 111, bbb: 222, ccc: 333 };

//let - in
console.log('let-in');
for (let x in cars) {
  console.log(cars[x]);
}

for (let x in user) {
  console.log(user[x]);
}

for (let x in user10) {
  console.log(x, user10[x]);
}

//map

let val = user.map((u) => u.id);
console.log(val);
console.log(user);
