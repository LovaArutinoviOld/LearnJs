fetch('https://api.openweathermap.org/data/2.5/forecast/weather?id=703448&appid=a24b4f99724dd1616520551f0bd230ff')
		.then(function (resp) { return resp.json() })// Convert data to json
		.then(function(data) {
			console.log(data);
		})
		.catch(function () {
			// catch any errors
		});
		https://samples.openweathermap.org/data/2.5/forecast/hourly?q=M%C3%BCnchen,DE&appid=439d4b804bc8187953eb36d2a8c26a02