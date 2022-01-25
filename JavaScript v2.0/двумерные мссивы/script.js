let a = [9,8,7];
let b = [
	[9,8,7],
	[6,5,4],
	[3,2,1],
];
console.log(b)
// for (let i = 0; i < b.length; i++){
// 	let  c = b[i];
// 	for( let k = c.length -1; k >= 0; k--){
// 		let item = document.createElement('button')
// 		item.innerHTML = c[k];
// 		item.classList.add('button')
// 		document.querySelector('body').appendChild(item)
		
// 	}
// }
// let buttons = document.querySelectorAll('button');
// for ( let i = 0; i < buttons.length; i++){

// 	buttons[i].onclick = () => {
// 		// console.log(buttons[i])
// 		alert(buttons[i].innerHTML)
// 	}
// }
let out = '';
for (let i = 0; i < b.length; i++){
	for(let k = 0; k < b[i].length; k++){
		out += b[i][k] += ' ';
	}
	out += '<br>'
}

out = '';

document.querySelector('.out').innerHTML = out;
for (let i = 0; i < b.length; i++){
	for(let k = 0; k < b[i].length; k++){
		if(b[i][k] > 4) {
			out += b[i][k] += ' ';
		}
	}
	out += '<br>'
}
console.log(out)

let d = [1,0,0,0,0];
let k = 0
document.querySelector('.out2').innerHTML = d
document.querySelector('.push').onclick = () =>{
	if( k + 1 < d.length){
		d[k] = 0;
		d[k + 1] = 1
		k++
	}else if ( k + 1 > 0){
		d[k] = 0
		d[k - 1] = 1
		k--
	}
	document.querySelector('.out2').innerHTML = d
}
