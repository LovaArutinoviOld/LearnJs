let a = [9,8,7];
let b = [
	[9,8,7],
	[6,5,4],
	[3,2,1],
];
console.log(b)
for (let i = 0; i < b.length; i++){

	let  c = b[i];
	for( let k = 0; k < c.length; k++){
		let item = document.createElement('button')
		item.innerHTML = c[k];
		item.classList.add('button')
		document.querySelector('body').appendChild(item)
		
	}
}
let buttons = document.querySelectorAll('button');
console.log(buttons)
for ( let i = 0; i < buttons.length; i++){

	buttons[i].onclick = () => {
		// console.log(buttons[i])
		alert(buttons[i].innerHTML)
	}
}
