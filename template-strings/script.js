const firstName = 'Ahmed';
const age = 46;
const job = 'Web Developer';
const city = 'Sarajevo';

let html;

html = `
  <ul>
    <li>Name: ${firstName}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${age > 40 ? 'Over 40' : 'Under 40'}</li>
  </ul>
`;

console.log(html);

function hello() {
  return 'Hello, ' + firstName;
}

document.body.innerHTML = html;
