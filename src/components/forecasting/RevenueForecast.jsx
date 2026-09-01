import { revenueForecast } from '../../data/forecastingData.js';

function RevenueForecast({ activeUnit }) {
  const rows = activeUnit === 'All Units' ? revenueForecast : revenueForecast.filter((item) => item.unit === activeUnit);
  return (
    <section className="panel revenue-table-panel" aria-labelledby="revenue-forecast-title">
      <div className="panel__header"><div><span className="eyebrow">Business Units</span><h2 id="revenue-forecast-title">Revenue Forecast</h2></div></div>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Business Unit</th><th>Forecast</th><th>Target</th><th>Variance</th><th>Confidence</th><th>Growth</th></tr></thead>
          <tbody>{rows.map((row) => <tr key={row.unit}><th scope="row">{row.unit}</th><td>${row.forecast.toFixed(2)}M</td><td>${row.target.toFixed(2)}M</td><td className={row.variance.startsWith('+') ? 'positive' : ''}>{row.variance}</td><td>{row.confidence}%</td><td>{row.growth}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

export default RevenueForecast;
