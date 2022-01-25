const a = [1,2,3,4,5,6,7,8,9];

const b = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];

console.log(a.length)
console.log(a.push(10,11,22,33))
console.log(a)

b.push('g','e')
console.log(b)
 console.log(b[44] = 'some')
 console.log(b)

console.log(b.pop())
console.log(b.length)

// delete element in array

delete a[4];
console.log(a);

a.splice(4,1,b);
console.log(a)
a.push('hell')
console.log(a)