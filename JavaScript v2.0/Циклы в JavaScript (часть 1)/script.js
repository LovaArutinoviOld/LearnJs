//for
//while
//for(старт; работаем пока верно, счетчик)
// let div = document.querySelectorAll('.one');
// console.log(div);
// div.style.background ="red";

/* for (let i = 0; i< div.length; i = i + 1){
    div[i].style.background = 'red';
    console.log(div[i]);
    div[i].onclick = two;
}

function two() {
    if(this.style.background == 'blue')
        this.style.background = 'red'
    else
        this.style.background = 'blue';

    this.classList.toggle("b")
    console.log("work!!!")
}

let b = document.getElementsByClassName('one');
console.log(b);
let c = document.getElementsByTagName('div');
console.log(c);

for (let i = 0; i < b.length; i++ ){
    b[i].style.border = "1px solid #242424";
} */
// for (var i = 0; i < 6; i + 1){
    
// }// i = 1

// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++){
//         if (r[i].checked) {
//             console.log(r[i].value)
//         }
//     }
// }
document.querySelector('.b-1').onclick = function t1() {
    document.querySelector('#out').innerHTML = '';
   
    for (let i = 0; i < 50; i++){
    
        document.querySelector('#out').innerHTML  += i + 1 + ' ';
    }
}
document.querySelector('.b-2').onclick = function t2() {
    document.querySelector('#out').innerHTML = '';

    for (let i = 0; i < 122; i = i + 2){
        
        document.querySelector('#out').innerHTML += i + 2 + ' ';
    }
    
}
document.querySelector('.b-3').onclick = function t3() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 25; i > 1; i--){
        
        document.querySelector('#out').innerHTML += i +' ';
        if (i == 7) break;
    }
    
}
document.querySelector('.b-4').onclick = function t4() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 0 ; i < 231; i = i + 33){
        
        document.querySelector('#out').innerHTML += i + 33 +' ';
        
    }
    
}
document.querySelector('.b-5').onclick = function t5() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 555 ; i > 1 ; i = i - 5){
        
        document.querySelector('#out').innerHTML += i + ' ';
        
    }
    
}
document.querySelector('.b-6').onclick = function t6() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 3 ; i < 33; i = i * 2){
        
        document.querySelector('#out').innerHTML += i + ' ';
        
    }
    
}
document.querySelector('.b-7').onclick = function t7() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 66 ; i > 1; i = i / 3){
        
        document.querySelector('#out').innerHTML += i + ' ';
        
    }
    
}
document.querySelector('.b-8').onclick = function t8() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 66666 ; i > 1; i = i / 3){
        
        document.querySelector('#out').innerHTML += i + ' ';
        if( i < 100 ){
            break;
        }
        
    }
    
}
document.querySelector('.b-9').onclick = function t9() {
    document.querySelector('#out').innerHTML = '';
    
    for (let i = 1 ; i < 100000000000000000000000000000000000000000000000; i = i * 33){
        
        document.querySelector('#out').innerHTML += i + ' ';
        if( i > 10000000000000000 ){
            break;
        }
        
    }
    
}
document.querySelector('.b-10').onclick = function t10() {
    document.querySelector('#out').innerHTML = '';
    document.querySelector('#out').style.display = 'flex';
    for (let i = 1 ; i < 100000; i = i * 10){
        
        document.querySelector('#out').innerHTML += '<span style="background: rgb('+ Math.floor(Math.random() * Math.floor(256)) + ',' + Math.floor(Math.random() * Math.floor(256)) + ',' + Math.floor(Math.random() * Math.floor(256)) +');' + 'width:'+Math.floor(Math.random() * Math.floor(256)) +'px;'+ 'height:'+Math.floor(Math.random() * Math.floor(256)) + 'px;' + 'display:block;">ll</span>';
    }

}
let bg = document.querySelectorAll('.bg');
let btn = document.querySelectorAll('.btn');



for (let i = 0; i < btn.length; i++){
    btn[i].onclick = () =>{
        btn[i].previousElementSibling.style.background = 'rgb('+ Math.floor(Math.random() * Math.floor(256)) + ',' + Math.floor(Math.random() * Math.floor(256)) + ',' + Math.floor(Math.random() * Math.floor(256)) +')';
    }
}




