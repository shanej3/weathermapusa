// calls NWS API (twice), sends data to render.js

import { render } from "./render.js";

export function call_api(coordinates) { 
    // function that is called in main.js
    let initial_api_url = `https://api.weather.gov/points/${coordinates.lat},${coordinates.lng}`
    first_call(initial_api_url);


function first_call(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            alert("ERROR: Out of Bounds or Connection Failure");
            throw new Error("API ERROR (1st call)");
        }
        return response.json();
    })
    .then(data => {
        second_call(data);
        // send current data JSON to another API call to access more nested data
        // NWS API docs say to call the API twice but I'm not entirely sure if this is even
        // the right way to do it? 
    })
    .catch(error => {
        console.error("ERROR", error.message);
    })
}

function second_call(initial_data) {
    let main_url = initial_data.properties.forecast;
    // the main data nested properties --> forecast

    fetch(main_url)
    .then(response => {
        if (!response.ok) {
            alert("ERROR: Out of Bounds or Connection Failure");
            throw new Error("API ERROR (2nd call)");
        }
        return response.json();
    })
    .then(data => {
        render(data);
        // send the final data to render.js to render front-end
    })
    .catch(error => {
        console.error("ERROR", error.message);
    })
}
}

function display_weather(final_data) {
    for (let i = 0; i < 14; i++) {
        console.log(`${final_data.periods[i].name} : ${final_data.periods[i].temperature}`);
        // loops through 14 days, prints day : temperature
    }
}
