import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import {
  getCurrentWeather,
  getForecast,
  groupForecastByDay,
} from './services/weatherApi';
import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(city) {
    setLoading(true);
    setError('');

    try {
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(city),
        getForecast(city),
      ]);

      setCurrentWeather(weatherData);
      setForecast(groupForecastByDay(forecastData.list));
    } catch (err) {
      setCurrentWeather(null);
      setForecast([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
        <p>Search any city for current conditions and a 5-day outlook.</p>
      </header>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      {loading && !currentWeather && (
        <p className="loading-message">Loading weather data...</p>
      )}

      {currentWeather && (
        <main className="dashboard">
          <CurrentWeather weather={currentWeather} />
          <Forecast forecasts={forecast} />
        </main>
      )}
    </div>
  );
}

export default App;
