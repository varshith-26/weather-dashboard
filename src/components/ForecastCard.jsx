export default function ForecastCard({ forecast }) {
  const date = new Date(forecast.dt * 1000);
  const dayLabel = date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  const condition = forecast.weather[0];

  return (
    <article className="forecast-card">
      <p className="forecast-card__day">{dayLabel}</p>
      <img
        src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
        alt={condition.description}
        className="forecast-card__icon"
      />
      <p className="forecast-card__temp">{Math.round(forecast.main.temp)}°C</p>
      <p className="forecast-card__condition">{condition.description}</p>
      <div className="forecast-card__details">
        <span>{forecast.main.humidity}% humidity</span>
        <span>{Math.round(forecast.wind.speed)} m/s wind</span>
      </div>
    </article>
  );
}
