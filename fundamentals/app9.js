//function declaration

function add(x = 5, y = 7) {
  const result = x + y;
  console.log('add:' + result);
}

add(3, 5);
add();

//function expression

const sub = function (m = 3, n = 1) {
  const result = m - n;
  console.log('sub:' + result);
};

sub();

//arrow function

const sub2 = (m = 3, n = 1) => {
  const result = m - n;
  console.log('sub2:' + result);
};

sub2(5.6, 51);

//immediately invokable function expression EEFE

(function (name1 = 'Ahmed') {
  console.log('name: ' + name1);
})();

const cars = ['qqq', 'www', 'eee', 'rrr', 'ttt'];

cars.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

cars.map((car, index) => console.log(index + ' - ' + car));

const cats = [
  { id: 1, name: 'spot', type: 'domestic', vacinated: true, weight: 8 },
  { id: 2, name: 'tiger', type: 'domestic', vacinated: false, weight: 5 },
  { id: 3, name: 'jumper', type: 'domestic', vacinated: true, weight: 7 },
  { id: 4, name: 'speckle', type: 'domestic', vacinated: false, weight: 9 },
  { id: 5, name: 'sleepy', type: 'domestic', vacinated: true, weight: 12 },
];

let myCats = cats.map((cat, index) => ({
  index: index,
  catName: cat.name,
  weight: cat.weight,
}));

console.log(myCats);

const car = {
  model: 'dasdas',
  year: 2111,
  color: 'red',
};

for (const key in car) {
  if (Object.hasOwnProperty.call(car, key)) {
    const element = car[key];
    console.log(element);
  }
}

for (let x in cars) {
  console.log(cars[x]);
}
