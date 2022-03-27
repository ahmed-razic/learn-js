let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;
val = Array.from(list.children);

//val = list.childNodes;

val.forEach((item, index) =>
  console.log(`${index}:`, item.nodeType, item.nodeName)
);

val[2].textContent = 'Hello';
console.log(val);

list.firstChild;
list.firstElementChild;

list.lastChild;
list.lastElementChild;

list.childElementCount;

listItem.parentNode;
listItem.parentElement;

listItem.nextSibling;
listItem.nextElementSibling;

listItem.previousSibling;
listItem.previousElementSibling;
