const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function fetchWeather(endpoint, city) {
  if (!API_KEY) {
    throw new Error('Missing OpenWeather API key. Add VITE_OPENWEATHER_API_KEY to your .env file.');
  }

  const params = new URLSearchParams({
    q: city,
    appid: API_KEY,
    units: 'metric',
  });

  const response = await fetch(`${BASE_URL}/${endpoint}?${params}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Try another search.');
    }
    throw new Error('Unable to fetch weather data. Please try again.');
  }

  return response.json();
}

export function getCurrentWeather(city) {
  return fetchWeather('weather', city);
}

export function getForecast(city) {
  return fetchWeather('forecast', city);
}

export function groupForecastByDay(forecastList) {
  const dailyMap = new Map();

  forecastList.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    const hour = parseInt(item.dt_txt.split(' ')[1].split(':')[0], 10);

    if (!dailyMap.has(date) || Math.abs(hour - 12) < Math.abs(dailyMap.get(date).hour - 12)) {
      dailyMap.set(date, { hour, item });
    }
  });

  return Array.from(dailyMap.values())
    .slice(0, 5)
    .map(({ item }) => item);
}
