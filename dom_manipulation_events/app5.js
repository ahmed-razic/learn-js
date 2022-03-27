//create an element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

//add ID
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item');

//create text node and append to li
li.appendChild(document.createTextNode('Hello World'));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

document.querySelector('ul').appendChild(li);

console.log(li);
