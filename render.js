const mainPage = document.getElementById("page");
const rightOfMap = document.getElementById("right-of-map");
export function render(data) {
    
    let segmented_data = data.properties;
    two_week_forecast(segmented_data);
}

function two_week_forecast(data) {
    rightOfMap.innerHTML = '';
    for (let i = 1; i < 14; i++) {
        // 2 week forecast, starting at 1 (not 0) because we don't need current weather here
        const test_div = document.createElement('div');
        test_div.className = "test-div";
        test_div.textContent = `${data.periods[i].name} : ${data.periods[i].temperature}`;
        rightOfMap.appendChild(test_div);
    }
}