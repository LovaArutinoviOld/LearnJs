let out_1 = document.querySelector('.out_1');
let out_2 = document.querySelector('.out_2');
let out_3 = document.querySelector('.out_3');
let out_4 = document.querySelector('.out_4');
let out_5 = document.querySelector('.out_5');
let out_6 = document.querySelector('.out_6');
let out_7 = document.querySelector('.out_7');
let out_8 = document.querySelector('.out_8');
let out_9 = document.querySelector('.out_9');
let out_10 = document.querySelector('.out_10');
let out_11 = document.querySelector('.out_11');
let out_12 = document.querySelector('.out_12');
let out_13 = document.querySelector('.out_13');
let out_14 = document.querySelector('.out_14');
let out_15 = document.querySelector('.out_15');
let out_16 = document.querySelector('.out_16');
let out_17 = document.querySelector('.out_17');
let out_18 = document.querySelector('.out_18');
let out_19 = document.querySelector('.out_19');
let out_20 = document.querySelector('.out_20');
// for (let i = 0; i < 5; i++){
//     for(let k = 0; k < 10; k++){
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }
// for (let i = 1;i < 9;i++) {
//     // out.innerHTML += '3*'+i+'='+(i*3)+'<br>';
//     for (let k = 1; k < 10;k++) {
//         out.innerHTML += `${i}*${k}=${i * k}<br>`;
//     }
//     out.innerHTML += '<hr>';
// }
// for (let i = 1;i < 21; i++) {
//     document.querySelector('.out_1').innerHTML += `let out_${i} = document.querySelector('.out_${i}');<br>`
// }
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        out_1.innerHTML += '*';
    }
    out_1.innerHTML += '_';
}
for (let i = 1; i < 4; i++) {
    out_2.innerHTML += `${i}<br>`
    for (let k = 0; k < 3; k++) {
        out_2.innerHTML += '*_';
    }
    out_2.innerHTML += '<br>';
}
for (let i = 0; i < 4; i++) {
    for (k = 0; k < 3; k++) {
        out_3.innerHTML += '*_';
    }
    out_3.innerHTML += '<br>';
}
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 10; k++) {
        out_4.innerHTML += '*';
    }
    out_4.innerHTML += '<br>';
}
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 20; k++) {
        out_5.innerHTML += '*';
    }
    out_5.innerHTML += '<br>';
}
for (let i = 0; i < 1; i++) {
    for (let k = -2; k < 12; k += 3) {
        out_6.innerHTML += `${'*'.repeat(k+3)}<br>`;
    }
    for (let k = 13; k > 0; k = k - 3) {
        if (k < 4) {
            break;
        }
        out_6.innerHTML += `${'*'.repeat(k - 3 )}<br>`;
    }
    out_6.innerHTML += '<br>'
}
for (let i = 0; i < 1; i++) {

    for (let k = -2; k < 15; k += 3) {
        out_7.innerHTML += `${'*'.repeat(k+3)}<br>`;
    }
}
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 20; k++) {
        out_8.innerHTML += '*';
    }
    out_8.innerHTML += `${'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'.repeat(i)}<br>`;
}
let j = 0;
out_9.style.textAlign = 'right';
for (let i = 24; i < 45; i += 2) {

    for (let k = 0; k < i; k += 2) {
        out_9.innerHTML += k + ' ';
        // if ((k % 2) == 1 || k == i) {
        //     continue
        // }
        // k = k * 2;
        // if(k == i){
        //     break
        // }

        j += 1;
    }
    out_9.innerHTML += ' - ' + j + ' - ' + i + '<br>';
    j = 0;
}
let sec = document.querySelector('#out_s');
min = document.querySelector('#out_m');
hour = document.querySelector('#out_h');

secC = 0;
minC = 0;
hourC = 0;


setInterval(() => {
    secC += 1;
    if (sec.innerHTML <= 8) {
        sec.innerHTML = '0' + secC;
    } else {
        sec.innerHTML = secC;
    }

}, 1000);

setInterval(() => {
    minC += 1;
    if (min.innerHTML <= 9) {
        min.innerHTML = '0' + minC;
    } else {
        min.innerHTML = minC;
    }
    secC = 0;
    sec.innerHTML = '00';
}, 60000);

setInterval(() => {
    hourC += 1;
    if (hour.innerHTML <= 9) {
        hour.innerHTML = '0' + hourC;
    } else {
        hour.innerHTML = hourC;
    }
    minC = 0;
    secC = 0;
    min.innerHTML = '00';
    sec.innerHTML = '00';
}, 3600000);

console.log(out_11);
out_11.style.textAlign = "left";
out_11.style.width = "100%";
for (i = 1; i <= 9 ; i++){
	for(k = 1 ; k <= 9; k++){
		out_11.innerHTML += `${i} * ${k}  = ${i * k}<br>`
	}
	out_11.innerHTML += "<hr>"
}