export function renderData(processedJSON) {
	try {
		// func to create quick divs
		function createDiv(divName) {
			const div = document.createElement("div");
			div.id = divName;
			return div;
		}
		// get output div
		const output = document.getElementById("output");
		// clear current output
		while (output.lastChild) {
			output.removeChild(output.lastChild);
		}
		// create weather Element
		const weather = createDiv(weather);
		weather.classList.add("card");
		const updateTime = createDiv(updateTime);
		updateTime.textContent = processedJSON.updateTime;
		const temperature = createDiv(temperature);
		temperature.textContent = processedJSON.temperature;
		const wind = createDiv(wind);
		wind.textContent = processedJSON.wind;
		// append weather components to weather div
		weather.appendChild(updateTime);
		weather.appendChild(temperature);
		weather.appendChild(wind);
		// append weather div to output
		output.appendChild(weather);
	} catch (error) {
		console.log(error);
	}
}
