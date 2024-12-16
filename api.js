// calls NWS API (twice), sends data to render.js

import { one_week_forecast } from "./render.js";
import { daily_forecast } from "./render.js";

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
        // NWS API requires 2 calls, 1 for main data, and another to access specific 
        // data, in this case i want forecast (week) and forecastHourly (day)
        call_for_weekly_forecast(data);
        call_for_daily_forecast(data);
    })
    .catch(error => {
        console.error("ERROR", error.message);
    })
}

function call_for_weekly_forecast(initial_data) {
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
        one_week_forecast(data);
    })
    .catch(error => {
        console.error("ERROR", error.message);
    })
}

function call_for_daily_forecast(initial_data) {
    let main_url = initial_data.properties.forecastHourly;
    // the main data nested properties --> forecastHourly

    fetch(main_url)
    .then(response => {
        if (!response.ok) {
            alert("ERROR: Out of Bounds or Connection Failure");
            throw new Error("API ERROR (2nd call)");
        }
        return response.json();
    })
    .then(data => {
        daily_forecast(data);
    })
    .catch(error => {
        console.error("ERROR", error.message);
    })
}
}