export function renderData(processedJSON) {
	try {
		console.log("Rendering...");
		// func to create quick divs
		function createDiv(divName) {
			const div = document.createElement("div");
			div.classList.add(divName);
			return div;
		}
		// get output div
		const output = document.getElementById("output");
		// clear current output
		while (output.lastChild) {
			output.removeChild(output.lastChild);
		}
		// create weather Element
		const weather = createDiv("weather");
		weather.classList.add("card");
		const updateTime = createDiv("updateTime");
		updateTime.textContent = `Last Update: ${processedJSON.updateTime}`;
		const temperature = createDiv("temperature");
		temperature.textContent = `Temperature: ${processedJSON.temperature} C`;
		const wind = createDiv("wind");
		wind.textContent = `Wind Speed: ${processedJSON.wind} mph`;
		const location = createDiv("location");
		location.textContent = `Location: ${processedJSON.location}`;
		// append weather components to weather div
		weather.appendChild(updateTime);
		weather.appendChild(temperature);
		weather.appendChild(wind);
		weather.appendChild(location);
		// append weather div to output
		output.appendChild(weather);
	} catch (error) {
		console.log(error);
	}
}
