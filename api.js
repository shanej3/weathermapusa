// initialize 

export function call_api(coordinates) { 
    //console.log(coordinates);
    let initial_api_url = `https://api.weather.gov/points/${coordinates.lat},${coordinates.lng}`
    first_call(initial_api_url);


function first_call(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            alert("Error connecting to NWS");
            throw new Error("NWS CONNECTION ERROR");
        }
        return response.json();
    })
    .then(data => {
        second_call(data);
    })
    .catch(error => {
        console.error("API CALL FAILED", error.message);
    })
}

function second_call(initial_data) {
    let main_url = initial_data.properties.forecast;

    fetch(main_url)
    .then(response => {
        if (!response.ok) {
            alert("Error connecting to NWS");
            throw new Error("NWS CONNECTION ERROR");
        }
        return response.json();
    })
    .then(data => {
        display_weather(data.properties); // all data we care about is in 'properties'
    })
    .catch(error => {
        console.error("Error", error.message);
    })
}
}

function display_weather(final_data) {
    console.log(final_data);
    for (let i = 0; i < 14; i++) {
        console.log(`${final_data.periods[i].name} : ${final_data.periods[i].temperature}`);
        // loops through 14 days, prints day : temperature
    }
}