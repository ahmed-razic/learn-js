const person = {
  firstName: 'Ahmed',
  lastName: 'Razic',
  age: 46,
  email: 'ahmed.razic@gmail.com',
  hobbies: ['cycling', 'IT', 'walking'],
  cars: new Array('Golf 2', 'Golf 7'),
  address: {
    street: 'First street 101',
    city: 'Sarajevo',
    postalnumber: 71000,
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

let val;

val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[2];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Ahmed', age: 46 },
  { name: 'Ahmed', age: 46 },
  { name: 'Ahmed', age: 46 },
];

for (let i = 0; i < people.length; i++) {
  const element = people[i];
  console.log(element);
}
