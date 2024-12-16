// This file is responsible for UI rendering/updating the DOM


// variables corresponding to already exisiting HTML elements
const mainPage = document.getElementById("page");
const rightOfMap = document.getElementById("right-of-map");

export function render(data) {
    
    // segmented data for use in for-loop, only 'properties' part of main JSON 
    let segmented_data = data.properties;
    two_week_forecast(segmented_data);
}

function two_week_forecast(data) {
    // 2 week forecast, starting at 1 (not 0) because we don't need current weather here

    rightOfMap.innerHTML = ''; 
    //clears previous HTML, may need to do this a different way in the future

    for (let i = 1; i < 14; i++) {
        const day_div = document.createElement('div');
        day_div.className = "day-forecast";
        day_div.textContent = `${data.periods[i].name} : ${data.periods[i].temperature}`;
        rightOfMap.appendChild(day_div);
    }
}