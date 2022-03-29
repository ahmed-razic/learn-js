let val = document;
val = document.contentType;
val = document.title;
val = document.scripts;
val = document.URL;

val = document.forms;
val = document.forms.item(1);
val = document.forms[0].method;
val = document.forms[1].action;

val = document.links;

valArray = Array.from(val);

console.log(typeof val);
console.log(typeof valArray);

console.log(val);
console.log(valArray);

valArray.forEach((item) => console.log(item.innerHTML));

valArray.forEach((item) => {
  console.log(item.id);
  console.log(item.className);
});
