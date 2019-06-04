alert("Welcome, guest!");

const name = prompt("What is your name?");

const likesSoccer = confirm("Do you like soccer?");

if (likesSoccer) {
  document.write(`${name} likes soccer!`);
  console.log(`${name} likes soccer!`);
} else {
  document.write(`${name} does not likes soccer!`);
  console.log(`${name} does not likes soccer!`);
}
