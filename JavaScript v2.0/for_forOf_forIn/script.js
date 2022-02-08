// let arr = [3,6,7];

let boxNode = document.querySelectorAll('.box')
let boxHtml = document.getElementsByClassName('box')
console.log(boxNode)
console.log(boxHtml)

// console.log(arr)
// 1 =============
// for(let i = 0; i < boxNode.length; i++){
//    console.log(boxHtml[i])
// }

// 2 key возврашает ключ ============= has differencewith node list and html collection

// for (let key in boxHtml){
//     console.log(boxHtml[key])
// }


// 3 item возврошает прямо знаяение а не ключь  =============

for( let item of boxHtml){
    console.log(item)
}

