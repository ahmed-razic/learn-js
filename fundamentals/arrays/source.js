const numbers = [23, 54, 8976, 34, 11, 99];
const numbers2 = new Array(11, 44, 655, 889, 99);
const fruit = ['sss', 'fff', 'ffff', 'wer'];
const fruit2 = new Array('sss', 'fff', 'ffff', 'wer');
const myName = 'Ahmed';
const myAge = 46;
let val;

val = numbers.length;
val = Array.isArray(myName);
val = Array.isArray(myAge);
val = Array.isArray(numbers);
numbers[2] = 0;
val = numbers[2];

val = numbers;
val = numbers.indexOf(54);

numbers2.push(100);
numbers2.unshift(1);
numbers2.shift();
numbers2.pop();

const nums = [1, 2, 3, 4, 5, 6];
val = nums.splice(2, 2);

console.log(numbers2);
console.log(numbers);
console.log(nums);

numbers.sort();
numbers.reverse();

fruit.sort();
fruit.reverse();

console.log(val);
console.log(numbers);

console.log(fruit);

function over50(num) {
  return num > 50;
}

function over2(num) {
  return num > 2;
}

val = numbers.find(over50);
console.log(val);

const nums2 = [0, 2, 1, 5, 6, 3];
const val2 = nums2.find(over2);
console.group(val2);
