let city = document.querySelector('.weather__title');
let deg = document.querySelector('.weather__count');
let weatherWord = document.querySelector('.weather__disclaimer');
let weatherFeatures = document.querySelector('.weather__features');

fetch('https://api.openweathermap.org/data/2.5/weather?id=1282028&appid=4b24ebc0c6ce204e57db7e4cf831c8cd')
.then(function(resp) {return resp.json() }) // convert data to json
.then(function(data){
	console.log(data);
	city.textContent = data.name
	deg.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
	weatherWord.textContent = data.weather[0].description
	weatherFeatures.querySelector('li').innerHTML = 
	`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
})
.catch(function(){
	// catch any errors
}) 
// https://openweathermap.org/img/wn/13d@2x.png