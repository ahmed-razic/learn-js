//Event Bubling

document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function () {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function () {
  console.log('col');
});

document.querySelector('.row').addEventListener('click', function () {
  console.log('row');
});

document.querySelector('.container').addEventListener('click', function () {
  console.log('container');
});

//Event delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }
}
