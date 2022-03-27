//replace elements

const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));
newHeading.innerHTML = '<span>SPAN</span>';

const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(cardAction);
