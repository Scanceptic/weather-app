import "./style.css";
import { renderData } from "./dom";
import { getWeatherJSON, processWeatherJSON } from "./weatherAPI";

console.log("Linked");

// add proper submit functionality to index button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", async () => {
	try {
		console.log("Clicked");
		// get location input
		const inputElement = document.getElementById("location");
		// get text from it
		const location = inputElement.value;
		console.log(location);
		// get and process JSON
		//const processedJSON = await processWeatherJSON(location);
		// render data
		renderData(await processWeatherJSON(location));
	} catch (error) {
		console.log(error);
	}
});
