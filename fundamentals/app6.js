const id = 100;
const age = '20';
let name1;
const name11 = 'Ahmed';

if (id == 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

if (age == 20) {
  console.log('Age is 20');
} else {
  console.log('Age is not 20');
}

//VALUE AND TYPE
if (age === 20) {
  console.log('Age is 20');
} else {
  console.log('Age is not 20');
}

if (typeof name1 === 'undefined') {
  console.log(`Name is ${name1}`);
} else {
  console.log('No name');
}
