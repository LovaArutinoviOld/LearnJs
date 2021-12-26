let f1 = document.querySelector('.f-1');
let f2 = document.querySelector('.f-2');

function one(){
    console.log('work');
}
one();

f1.onclick = one; // без круглых скобок
console.log(one()); // undefined

function two(){
    console.log('work 2');
    return 54;
}
two();

console.log(1 + two());

let a = 8;
let b = 9;

function multi(){
    console.log(a * b);
    return a * b;
}

let c1 = multi();
let c2 = 10 * multi();

console.log(c1,c2);

function multi2 (x,y){
    return x * y;
}
function multi3 (x = 5,y = 4){
    return x * y;
}

console.log(           multi2(4,5)           );
console.log(           multi2(3,4)           );
console.log(           multi2(3,a)           );

console.log(           multi3(3,6)           );
console.log(           multi3(10)           );
console.log(           multi3()           );

f2.onclick = function(){
    console.log('"++++++"');
}
f2.onclick = () => {
    console.log('"Arrow"');
    console.log('"++++++"');
}
function (a,b){
    
}
(a,b) => {
    
}
function (a){
    return 'Hello' * a;
}
(a) => 'Hello' * a