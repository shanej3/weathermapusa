// initialize 

const test_url = 'https://api.weather.gov/points/38.8894,-77.0352';
fetch(test_url)
    .then(response => { 
        if (!response.ok) { 
            alert("Error connecting to NWS");
            throw new Error('ERROR CONNECTING TO NWS');
            
        }
        return response.json();
    })
    .then(data => { 
        console.log(data);
    })
    .catch(error => {
        console.error('Error', error);
    });

export function call_api(coordinates) { 
    console.log(coordinates);
}
