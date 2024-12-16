// This file is responsible for UI rendering/updating the DOM


// variables corresponding to already exisiting HTML elements
const mainPage = document.getElementById("page");
const rightOfMap = document.getElementById("right-of-map");
const leftOfMap = document.getElementById("left-of-map");

export function daily_forecast(data) {
    let segmented_data = data.properties;

    leftOfMap.innerHTML = '';

    for (let i = 0; i < 12; i++) {
        const hour_div = document.createElement('div');
        hour_div.className = "hour-forecast";
        hour_div.textContent = `${segmented_data.periods[i].temperature}`;
        leftOfMap.appendChild(hour_div);
    }

}

export function one_week_forecast(data) {
    let segmented_data = data.properties;

    rightOfMap.innerHTML = ''; 
    //clears previous HTML, may need to do this a different way in the future

    for (let i = 2; i < 14; i++) {
        const day_div = document.createElement('div');
        day_div.className = "day-forecast";
        day_div.textContent = `${segmented_data.periods[i].name} : ${segmented_data.periods[i].temperature}`;
        rightOfMap.appendChild(day_div);
    }
}