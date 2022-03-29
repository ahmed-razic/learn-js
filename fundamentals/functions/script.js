//Function declaration
function sendGreeting(firstname = 'Ahmed', lastName = 'Razic') {
  return 'Hello' + ' ' + firstname + ' ' + lastName;
}

console.log(sendGreeting());

//Function expression

const add = function (m = 10, n = 20) {
  return m + n;
};

console.log(add(2, 3));
console.log(add());

//immediatly invokable function expression - iife

(function (myAge) {
  console.log(myAge);
})(45);

(function (text) {
  console.log(text);
})('Hi');

console.log(
  (function (m = 10, n = 20) {
    return m + n;
  })(50, 50)
);

//arrow function

const square = (p = 10, q = 2) => {
  return p ** q;
};

console.log(square(2, 3));

//methods

const todo = {
  add: function () {
    console.log('add task');
  },
  edit: function (id) {
    console.log('edit task');
  },
};

todo.add();
todo.edit();

todo.delete = function (id) {
  console.log('delete task');
};

todo.delete();
