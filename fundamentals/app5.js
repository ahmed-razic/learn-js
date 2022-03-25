//date and time
let today = new Date('3-27-2022');
let birthday = new Date('01-01-2019 13:45:59');

console.log('today: ', today);
console.log('birthday: ', birthday);

birthday = new Date('1-6-1976 1:0:0');
console.log('birthday: ', birthday);

let val = new Date();

console.log(val);
console.log(val.getDate());
console.log(val.getDay());
console.log(val.getMonth());
console.log(val.getFullYear());
console.log(val.getHours());
console.log(val.getMinutes());
console.log(val.getMilliseconds());
console.log(val.getTime());

birthday.setDate(5);
birthday.setMonth(5);
birthday.setFullYear(3000);
birthday.setTime(65465465465454);

console.log(birthday);
