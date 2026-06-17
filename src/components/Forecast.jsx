import ForecastCard from './ForecastCard';

export default function Forecast({ forecasts }) {
  return (
    <section className="forecast card">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecasts.map((item) => (
          <ForecastCard key={item.dt} forecast={item} />
        ))}
      </div>
    </section>
  );
}
