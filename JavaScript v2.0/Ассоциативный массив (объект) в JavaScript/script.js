const a = {
	"a": 5,
	"b": 'hello',
	"z2": 'privet',
	b3:1188,
	'k54':55,
};
a.yyy = 666;
a.b = 'nnn';
delete a.a;
console.log(a);
console.log(a.z2);
let k = 'b3';

console.log(a[k]);

// document.querySelector('.out').innerHTML = a;
let out = '';
for (let key in a){
	out += key + ': '+a[key] + '<br>';
}
document.querySelector('.out').innerHTML = out;
