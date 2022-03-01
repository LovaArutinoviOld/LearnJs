window.addEventListener('storage',function(e){
    console.log('change')
    document.querySelector('.out').textContent = localStorage.getItem('dd')
});

// localStorage.setItem('info', 'info@gmail.com');
// console.log(localStorage.getItem('info'))

// const a = [6,2,1,1]

// localStorage.setItem('a', JSON.stringify(a));

// let b = localStorage.getItem('a');

// b = JSON.parse(b)

// console.log(b)
// console.log(b[0])
// console.log(typeof b)


// const c = {
//     hee: 1231,
//     hhdf: 3123,
//     gg:123,
//     3:3,
//     'hi':123
// }

// localStorage.setItem('c', JSON.stringify(c));

// let d = localStorage.getItem('c');

// d = JSON.parse(d)

// console.log(d)
// console.log(d)
// console.log(typeof d)