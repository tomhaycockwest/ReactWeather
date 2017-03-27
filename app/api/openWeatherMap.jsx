var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d32646e3462feb34520186b1e719ed77&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

	  return axios.get(requestUrl).then(function(res) {
			if (res.data.cod === 200){
				return res.data.main.temp
      }
			throw res.data.cod;
		}, function(res) {
			throw ('Unable to fetch weather for that location');
		});
	}
}
