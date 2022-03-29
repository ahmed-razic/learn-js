//global scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global scope: ', a, b, c);

//function scope
function test() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log('Function scope: ', a, b, c);
}
test();

//block scope

if (true) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log('Block scope: ', a, b, c);
}

console.log('Global scope: ', a, b, c);
