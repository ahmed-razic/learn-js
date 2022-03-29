const firstName = 'Ahmed';
const lastName = 'Razic';
const age = 46;
const str = 'Hello, my name is Ahmed.';
const tags = 'web design, web development, programming.';

let val;

val = firstName + lastName;
val = firstName + ' ' + lastName;

val = firstName;
val += lastName;

val = "That's awesome. I can't wait.";

val = firstName.length;
val = str.length;

val = firstName.concat(' ', lastName);
val = firstName.concat(' ', lastName, ' ', str);

val = firstName.toLowerCase();
val = firstName.toUpperCase();
val = firstName.normalize();

val = str.indexOf('l');
val = str.lastIndexOf('l');

val = str.charAt(10);
val = str.charAt(str.length - 1);

val = str.includes('my');

val = str.substring(2, 5);
val = str.slice(2, 5);

val = str.slice(2, 1);
val = str.substring(5, 1);

val = str.split(' ');
val = tags.split(',');

val = str.replace('Ahmed', 'Ibrahim');
console.log(str);
//val = str.includes('Ahmed');

console.log(val);
