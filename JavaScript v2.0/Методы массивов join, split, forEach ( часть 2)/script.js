let a = [4,6,87,87,-3,-5,-7,-999,-0607,3,14,12341,14,14114]
let b = "'hello it's is some,wery&ig,text"

console.log(b.split(' ').join('-'))
console.log(a.join('-'))

a.forEach(function(item,index) {
    console.log(index)
    console.log(item)
    console.log('-------------')
})