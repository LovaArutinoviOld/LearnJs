let a = [4,6,87,87,,-3,-5,-7,-999,-0607,3,14,12341,14,14114]
const out = document.querySelector('.out');
// console.log(out)
// let b = a.map(function(item,index){
//     console.log(item)
//     let h3 = document.createElement('span')
//     let p = document.createElement('span')
//     let br = document.createElement('br')
//     h3.innerHTML = `${item} * ${index} = `
//     p.innerHTML = item * index
//     out.append(h3,p,br)
//     // out.appendChild(p)
//     // out.appendChild(br)
//     return index
//     // return item * index
// });
// console.log(b)

let c = a.filter(function(item,index){
    if(item % 3 === 0 && item > 0) {
        return true
    }
})
console.log(c)