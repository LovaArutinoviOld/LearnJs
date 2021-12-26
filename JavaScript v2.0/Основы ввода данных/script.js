let inpt1 = document.querySelector('.inpt-1');
let btn1 = document.querySelector('.btn-1');
let outValue = document.querySelector('.out-value');

 btn1.onclick = function (){
    let b = inpt1.value;
    console.log(b * b);
    console.log(b / 2);
    console.log(b + 2);
    console.log(+b + 2);
    console.log(b - 2);
    console.log(b / 0);
    console.log(b * 0);
    outValue.innerHTML = b;
    inpt1.value = '';
 }