// localStorage.setItem('name', 'Ahmed');
// localStorage.setItem('age', 46);
// localStorage.setItem('student', true);

// sessionStorage.setItem('name', 'Ahmed');
// sessionStorage.setItem('age', 46);
// sessionStorage.setItem('student', true);

// localStorage.removeItem('student');

// const myName = localStorage.getItem('name');
// const myAge = localStorage.getItem('age');
// console.log(myName, myAge);

//localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const task = document.getElementById('task').value;
  console.log(task);

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');
});

let tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(typeof tasks, tasks);

tasks = localStorage.getItem('tasks');
console.log(typeof tasks, tasks);
