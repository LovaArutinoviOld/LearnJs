const one = document.querySelector('.one');

one.style.width = '200px';
one.style.height = '200px';
one.style.padding = '20px';
one.style.borderRadius = '50px';

one.classList.add('two','three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}


// Атрибуты data

console.log(one.getAttribute('data'))
console.log(document.querySelector('link').getAttribute('href'));
one.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');

for(let i = 0; i < gas.length; i++){
    gas[i].onclick = function (){
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log( gallons * amount);

    }
}
let a = document.createElement('div');

a.innerHTML = 'hello';
a.classList.add('CreateDiv')
console.log(a);
a.onclick = function (){
    alert(this.innerHTML)
}

document.querySelector('.test').appendChild(a);