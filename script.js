const cityWeather = {
    "New York": {
        temperature: "25°C",
        condition: "Sunny"
    },
    "London": {
        temperature: "18°C",
        condition: "Cloudy"
    },
    "Tokyo": {
        temperature: "22°C",
        condition: "Rainy"
    },
    "Paris": {
        temperature: "20°C",
        condition: "Partly Cloudy"
    },
    "Sydney": {
        temperature: "30°C",
        condition: "Sunny"
    }
};

function getWeather() {
    const city = document.getElementById('citySelect').value;

    if (city === "") {
        alert('Please select a city');
        return;
    }

    const weatherInfo = document.getElementById('weatherInfo');
    if (cityWeather.hasOwnProperty(city)) {
        const { temperature, condition } = cityWeather[city];
        weatherInfo.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${temperature}</p>
            <p>Condition: ${condition}</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>No weather information available for ${city}</p>`;
    }
}

