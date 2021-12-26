// for
// while

// for (старт; работаем пока верно; сетчик){

// }
// let elem = document.createElement('div');
// elem.classList.add('elem-wrapper')
// let l = 0
// while ( l < 10){
// 	l++;
// 	elem.innerHTML += `<p class="elem-item">l: ${l} </p>`;
// 	// console.log( 'l: '+l);
// 	// if(l == 4) continue;
// }

// let sum = 0;
// let k = 0;
// while (k < 10){
// 	k++;
// 	sum += k ;

	
// 	console.log('k = '+ k,'sum = '+sum)

// }
// console.log(sum)
let elem = document.createElement('div');
let lova = 0;
let outStars = '';
let outStars1 = '';
let outStars2 = '';
let outStars3 = '';
let outStars4 = '';
let outStarsCount = '';
let l = 0;
let l1 = 0;

let o = 0;
let o1 = 0;
let o2 = 0;

let v = 0;
let v1 = 0;
let v2 = 0;

let a = 0;
let a1 = 0;
let a2 = 5;
let a3 = 0;
while( lova < 5){
	while ( l < 5){
		l++;
		outStars1 +=' ';
		l1 = 4;
		if( l > 4) l1 = 0;
		while( l1 < 5){
			l1++;
			outStarsCount += '<span>*</span>';
		}
		outStars1 += '<p class="cl">' + outStarsCount +'</p>'
		outStarsCount = '';

	}

	outStars += '<br>'
	outStars += '<br>'

	while ( o < 5){
		o++;
		outStars2 +=' ';
		o1 = 3;
		if ( o < 2 || o > 4) o1 = 0;
		while ( o1 < 4){
			o1++
			outStarsCount += '<span>*</span>';
		}
		while ( o2 < 1){
			o2++;
			outStarsCount += '<span>*</span>';
		}
		o2 = 0;
		outStars2 += '<p class="co">' + outStarsCount +'</p>'
		outStarsCount = '';
	}

	outStars += '<br>'
	outStars += '<br>'

	while ( v < 5){
		v++;
		outStars3 +=' ';
		v1 = 3;
		if ( v < 5 ) v1 = 2;

		while ( v1 < 4){
			v1++
			outStarsCount += '<span>*</span>';
			while( v2 < 5){
				v2++;
				outStarsCount += '<span>&nbsp&nbsp</span>';
			}

		}
		v2 = 0 + v;
		if( v2 == 4) v2 = 5;

		outStars3 += '<p class="cv">' + outStarsCount +'</p>'
		outStarsCount = '';
	}

	outStars += '<br>'
	outStars += '<br>'

	while ( a < 5){
		a++;
		outStars4 +=' ';
		a1 = 2;
		if ( a < 2 ) a1 = 3;
		while ( a1 < 4){
			a1++
			outStarsCount += '<span>*</span>';
			while( a2 < 5){
				a2++;
				if(a > 2 && a < 4) {
					outStarsCount += '<span>*</span>';
				}else {
					outStarsCount += '<span>&nbsp&nbsp</span>';
				}
			}

		}
		a2 = 4 - a;
		outStars4 += '<p class="ca">' + outStarsCount +'</p>'
		outStarsCount = '';
	}

	// while ( o2 < 10){
	// 	o2++;
	// 	outStars +=' ';
	// 	for ( o1 = 16; o1 > o2; o1--){
	// 		outStars += '* '
	// 	}
	// 	outStars +='<br>'
	// }
	outStars += '<br>'
	lova++
}

console.log(outStars1)
elem.classList.add('elem-wrapper')
elem.innerHTML = outStars;
document.querySelector('body').appendChild(elem)
document.querySelector('.clw').innerHTML = outStars1;
document.querySelector('.cow').innerHTML = outStars2;
document.querySelector('.cvw').innerHTML = outStars3;
document.querySelector('.caw').innerHTML = outStars4;
