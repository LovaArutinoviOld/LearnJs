console.log("Hello!");
console.log("World");
console.log("3333");
console.log(3333);
console.log("Hello" + "world");
console.log("Hello" + " world");
console.log("Hello" + " " + "world");
console.info('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('h2').innerHTML = 87;
document.querySelector('.header').innerHTML = 5;

document.getElementById('pOne').innerHTML = 55; // Нет #
document.querySelector('#pOne').innerHTML = 66; // Есть #

let b; // var a - Устарела
let a = document.querySelector('#pOne');
let c;
c = document.querySelector('.header');
c.innerHTML = 57;