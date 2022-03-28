document.querySelector('.clear-tasks').addEventListener('click', function () {
  console.log('Hello world');
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  console.log('Clicked');
  console.log(e.target.className);
  console.log(e.target.classLists);
  console.log(e.type);
  console.log(e.timestamp);
  console.log(e.clientY);
}
