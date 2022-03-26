//getElementById()

const paragraph = document.getElementById('para');
//console.log(paragraph.className);

paragraph.style.fontSize = '3rem';
paragraph.style.fontWeight = 'bolder';
paragraph.style.paddingLeft = '3rem';
//paragraph.style.display = 'none';
paragraph.style.color = '#b44aaa';

paragraph.textContent = 'Other content';
paragraph.innerText = 'Again';
paragraph.innerHTML = '<a href="http://google.com">Link to Google</a>';

//querySelector()
let val;
val = document.querySelectorAll('a');
val = document.querySelector('p');
val = document.querySelector('body');
val = document.querySelector('head');
val = document.querySelector('.sss');
val = document.querySelector('.sss');
val = document.querySelector('#item2');

val = document.querySelectorAll('p');
val = document.querySelector('a:last-child');
val = document.querySelector('a:nth-child(1)');

val = document.querySelector('li');
val = document.querySelector('li:nth-child(3)');

console.log(val);
