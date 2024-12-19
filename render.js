// This file is responsible for UI rendering/updating the DOM


// variables corresponding to already exisiting HTML elements
const mainPage = document.getElementById("page");
const rightOfMap = document.getElementById("right-of-map");
const leftOfMap = document.getElementById("left-of-map");

export function daily_forecast(data) {
    let segmented_data = data.properties;
    // console.log(segmented_data);

    leftOfMap.innerHTML = '';

    const current_temp_div = document.createElement('div');
    current_temp_div.id = 'current-temp';
    current_temp_div.textContent = `${segmented_data.periods[0].temperature}°`

    const current_conditions_div = document.createElement('div');
    current_conditions_div.id = 'current-conditions';
    current_conditions_div.textContent = `${segmented_data.periods[0].shortForecast}`

    
    leftOfMap.appendChild(current_temp_div);
    leftOfMap.appendChild(current_conditions_div);

}

export function one_week_forecast(data) {
    let segmented_data = data.properties;
    //console.log(segmented_data);

    rightOfMap.innerHTML = ''; 
    //clears previous HTML, may need to do this a different way in the future

    
    let index_to_start = 0;
    let index_to_end = 0;
    // we want the index to start after the current day's condition 
    // if it's daytime, then the API gives us the high and low of today, whereas
    // if it's nighttime it only gives us the night, again both of these we DONT want
    if (segmented_data.periods[0].isDaytime == true) { 
        index_to_start = 2;
        index_to_end = 12;
    }
    else if (segmented_data.periods[0].isDaytime == false) {
        index_to_start = 1;
        index_to_end = 13;
    }

    for (let i = index_to_start; i < index_to_end; i++) {
        if (segmented_data.periods[i].isDaytime == true)
        {
            // displays days as [Day] : [High temp]-[Low temp]
            const day_div = document.createElement('div');
            day_div.className = "day-forecast";
            day_div.textContent = `${segmented_data.periods[i].name} : ${segmented_data.periods[i].temperature}° - ${segmented_data.periods[i+1].temperature}°`;
            rightOfMap.appendChild(day_div);
        }
        
    }
}