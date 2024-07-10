/* 
    Asynchronous
    Takes location input
    Fetches from relevant API endpoint
    returns JSON object from API request
*/

export async function getWeatherJSON(location) {
	try {
		// create UK postcode regex
		const regex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
		// check location is valid UK postcode
		if (location.match(regex) === false) {
			// if invalid log error and return null
			console.log("Invalid location input");
			return null;
		}
		// remove whitespace in location
		const safeLocation = location.replaceAll(" ", "");
		// get API base url
		const baseUrl = "http://api.weatherapi.com/v1";
		// get API method
		const apiMethod = "/current.json";
		// get key
		const key = "?key=cf6d3fb68d684fbebb581624241007";
		// get no whitespace location (UK postcode format)
		const q = "&q=" + safeLocation;
		// concat to make full url
		const url = baseUrl.concat(apiMethod, key, q);
		// fetch weather JSON from API
		const response = await fetch(url);
		// if failed throw error
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		// wait for response and take object when returned
		const weatherJSON = await response.json();
		console.log(weatherJSON);
		// return response
		return weatherJSON;
	} catch (error) {
		console.log(error);
	}
}

/*
    Synchronous
    Takes in weather JSON object
    Returns new object with only the required data
*/

export function processWeatherJSON(weatherJSON) {
	try {
		// process JSON
		const processedJSON = {
			updateTime: weatherJSON.last_updated,
			temperature: weatherJSON.temp_c,
			feelslike: weatherJSON.feelslike_c,
			weatherText: weatherJSON["condition:text"],
			weatherIcon: weatherJSON["condition:icon"],
			weatherCode: weatherJSON["condition:code"],
			wind: weatherJSON.wind_mph,
		};
		// return processed data
		console.log(processedJSON);
		return processedJSON;
	} catch (error) {
		console.log(error);
	}
}
