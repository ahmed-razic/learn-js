const ul = document.createElement('ul');
const li = document.createElement('li');

li.className = 'list-item';
li.id = 'item1';
li.setAttribute('title', 'new-item');

const tNode = document.createTextNode('Hello World');
li.appendChild(tNode);

document.querySelector('ul').appendChild(li);

console.log(ul);
