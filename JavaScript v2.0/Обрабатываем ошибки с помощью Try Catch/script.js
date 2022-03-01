let a = new Set();
a.add('hello')
a.add('lova')
a.add("i'm")
a.add('here')
a.add('i')
a.add(7)
a.add(88)
a.add(8)
a.add(7)

a.delete(7)

console.log(a)

console.log(a.entries())

console.log(a.has(8))

console.log(a.size)

// let b = new Set('hello');
// console.log(b)
for (let i of a){
    console.log(i)
}

let arr = [1,2,3,45,56,6,6,66,,6,'6','44',22,',32423'];
let k = new Set(arr)
let n = new Set(k)
console.log('n',n)
console.log(Array.from(new Set(arr)))