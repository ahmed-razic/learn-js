let val;

//num to string

val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);

//bool to string

val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

//date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//array to string
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString method
val = (555).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

//String to number

val = Number('5');
val = Number(true);
val = Number('JS');
val = Number([1, 2, 3]);

val = parseInt('100.31');
val = parseFloat('100.31');
val = parseFloat('100.300');
val = parseFloat('100.300').toFixed(3);

console.log(val);
