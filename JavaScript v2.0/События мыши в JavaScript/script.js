const block1 = document.querySelector('.one');
const block2 = document.querySelector('.two');
const body = document.querySelector('body');

// body.onclick = function(event){
//     console.log(event)
//     // console.log(event.target)
//     let expression = event.target
//     switch(expression){
//         case block1:
//             console.log('one')
//             break;

//         case block2:
//             console.log('two')
//             break;

//         default:
//             console.log('missed')
//     }
// }
body.ondblclick = function (event) {
    console.log('doubleclick')
    // console.log(event.target)

}
// body.oncontextmenu = function(event){
//     console.log('right button')
//     return false
//     // console.log(event.target)

// }
let w = 75;

block1.onmousedown = function (event) {
    block1.onmousemove = function (event) {
        console.log('mouse is moved')
        block1.style.width = w + 'px';
        block1.style.height = w + 'px';
        block1.style.backgroundColor = `rgb(${Math.floor(Math.random() * Math.floor(256))}, ${Math.floor(Math.random() * Math.floor(256))}, ${Math.floor(Math.random() * Math.floor(256))})`
        // console.log(event.target)
      
        if(w <= 500 && w >= 50){
            w++
        }
    }
}
body.onmouseup = function (event) {
    block1.onmousemove = function (event) {
        console.log('mouse is moved')
        block1.style.width = w + 'px';
        block1.style.height = w + 'px';
        block1.style.backgroundColor = `rgb(${Math.floor(Math.random() * Math.floor(256))}, ${Math.floor(Math.random() * Math.floor(256))}, ${Math.floor(Math.random() * Math.floor(256))})`
        // console.log(event.target)
        if(w > 50){
            w--
        }
    }
    return false

}