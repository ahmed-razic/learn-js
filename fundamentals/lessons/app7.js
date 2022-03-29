//function declaration

function greet(firstName = 'Ibrahim', lastName = 'Razic') {
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Ahmed', 'Razic'));
console.log(greet());

//function exxpression

const square = function (x = 3) {
  return x * x;
};

console.log(square());
console.log(square(5));

// Immediately invokable function expression - IIFE

(function (name = 'Ahmed') {
  console.log(name);
})();

//property methods

const todo = {
  add: function () {
    console.log('add...');
  },
  edit: function () {
    console.log('edit...');
  },
  update: function () {
    console.log('update...');
  },
};

todo.add();
todo.edit();
todo.update();

todo.delete = function () {
  console.log('delete...');
};

todo.delete();

todo.multiplay = function (x = 2, y = 5) {
  return x * y;
};

console.log(todo.multiplay());
console.log(todo.multiplay(4, 4));
