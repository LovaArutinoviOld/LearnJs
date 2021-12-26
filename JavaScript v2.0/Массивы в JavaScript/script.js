// let a = 'Ivan';
// let b = '33';
// let iinNumber = 1337;

// let zodiak = ['Козерог', 1, 1, 19];
// let man = ['Ivan', 'male', 176, 93, 'Ivanv'];
// console.log(zodiak);
// console.log(man);
// console.log('Длина массива');
// console.log(zodiak.length);
// console.log(man.length);
// console.log(man[1]);

// man[0] = 'Sergey';
// console.log(man);

let a = [1, 2, 3, 4];
console.log(a);

let t = a[0]; // 1
a[0] = a[a.length - 1];
a[a.length - 1] = t;

console.log(a);
console.log(a[888]);

// for (let i = 0; i < a.length; i++){
//     document.querySelector('.out-1').innerHTML += a[i] + ' ';
// }

let out = '';
for (let i = 0; i < a.length; i++) {
    // if (a[i] % 2 == 0) {
    out += a[i] + ' _ _';
    // }
}
document.querySelector('.out-1').innerHTML += out;

let b = [4, 5, 6, 2, 3, 7, 8, 9, 1];
console.log(b)

b[b.length ] = 9;

console.log(b)


let max = b[0];

for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i];
    }
}
let sum = 0;

for (let i = 0; i < b.length; i++) {
   sum = sum + b[i];
}
console.log('max: ' , max);
console.log('sum: ' , sum);