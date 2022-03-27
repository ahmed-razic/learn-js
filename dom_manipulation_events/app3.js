//document.getElementsByClassName

const items = document.getElementsByClassName('category-class');

console.log(items);
console.log(items[1]);
console.log(items[2]);

items[2].style.color = 'red';
items[3].textContent = 'Heloooo';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('category-class');

console.log(listItems);

//document.getElementsByTagName

let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(typeof lis);

lis = Array.from(lis);
console.log(typeof lis);

lis.forEach((li, index) => {
  li.textContent = `${index}: Hello there.`;
});

lis.reverse();
lis.forEach((li, index) => {
  li.textContent = `${index}: Hello there.`;
});
