const a = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const b = ['a', 'b', 'c', 'd', 'e', 'f']; 

console.log(a.length);
console.log(a.push(10,11,12,55, 77));
console.log(a);
 
console.log(b);

b.push('j', 'h')
console.log(b);


console.log(b.pop());
console.log(b.pop());

console.log(b)


// удалить елемент внутри массива

delete a[3];
console.log(a);
a.splice(3,5,'hi');
console.log(a);

//shift unshift
console.log(b.shift());
console.log(b);
console.log(b.unshift());
console.log(b);