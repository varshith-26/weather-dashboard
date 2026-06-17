function WeatherIcon({ icon, description }) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt={description}
      className="weather-icon"
    />
  );
}

export default function CurrentWeather({ weather: data }) {
  const { name, sys, main, weather, wind } = data;
  const condition = weather[0];

  return (
    <section className="current-weather card">
      <div className="current-weather__header">
        <div>
          <h2>{name}</h2>
          <p className="country">{sys.country}</p>
        </div>
        <WeatherIcon icon={condition.icon} description={condition.description} />
      </div>

      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p className="condition">{condition.description}</p>

      <div className="stats-grid">
        <div className="stat">
          <span className="stat__label">Humidity</span>
          <span className="stat__value">{main.humidity}%</span>
        </div>
        <div className="stat">
          <span className="stat__label">Wind</span>
          <span className="stat__value">{Math.round(wind.speed)} m/s</span>
        </div>
        <div className="stat">
          <span className="stat__label">Feels like</span>
          <span className="stat__value">{Math.round(main.feels_like)}°C</span>
        </div>
      </div>
    </section>
  );
}
