const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const iconMapping = {
    '01': 'Sun',
    '02': 'CloudSun',
    '03': 'Cloud',
    '04': 'Cloud',
    '09': 'CloudRain',
    '10': 'CloudRain',
    '11': 'CloudLightning',
    '13': 'Snow',
    '50': 'Wind',
};

export const getWeather = async (location = "San Francisco") => {
    try {
        // Fetch Current Weather
        const currentRes = await fetch(
            `${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        if (!currentRes.ok) throw new Error('City not found');
        const currentData = await currentRes.json();

        // Fetch 5-Day Forecast
        const forecastRes = await fetch(
            `${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`
        );
        if (!forecastRes.ok) throw new Error('Forecast data unavailable');
        const forecastData = await forecastRes.json();

        // Map current weather
        const current = {
            city: currentData.name,
            country: currentData.sys.country,
            temp: Math.round(currentData.main.temp),
            condition: currentData.weather[0].main,
            description: currentData.weather[0].description,
            high: Math.round(currentData.main.temp_max),
            low: Math.round(currentData.main.temp_min),
            humidity: currentData.main.humidity,
            windSpeed: Math.round(currentData.wind.speed * 3.6), // Convert m/s to km/h
            uvIndex: 0, // UV Index requires a separate call usually, setting to 0 or mock
            feelsLike: Math.round(currentData.main.feels_like),
            visibility: Math.round(currentData.visibility / 1000),
            pressure: currentData.main.pressure,
            icon: iconMapping[currentData.weather[0].icon.slice(0, 2)] || 'CloudSun'
        };

        // Map forecast (Take 1 reading per day at 12:00)
        const forecast = forecastData.list
            .filter(item => item.dt_txt.includes('12:00:00'))
            .slice(0, 5)
            .map(item => ({
                day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                temp: Math.round(item.main.temp),
                condition: iconMapping[item.weather[0].icon.slice(0, 2)] || 'CloudSun',
                low: Math.round(item.main.temp_min)
            }));

        return { current, forecast };
    } catch (error) {
        console.error("Weather Service Error:", error);
        throw error;
    }
};
