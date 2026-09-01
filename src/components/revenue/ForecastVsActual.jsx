import { forecastActual } from '../../data/revenueData.js';

function ForecastVsActual() {
  return (
    <section className="panel forecast-panel" aria-labelledby="forecast-actual-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Revenue Plan</span>
          <h2 id="forecast-actual-title">Forecast vs Actual</h2>
        </div>
        <span className="status-pill">Above Plan</span>
      </div>

      <div className="forecast-band forecast-band--revenue" aria-label="Quarter target 8.75 million, current actual 8.42 million, projected 8.92 million, confidence 94 percent">
        <span className="forecast-band__range" />
        <span className="forecast-band__target" />
        <span className="forecast-band__actual" />
        <span className="forecast-band__projected" />
      </div>

      <div className="forecast-grid">
        <div><span>Quarter Target</span><strong>${forecastActual.target.toFixed(2)}M</strong></div>
        <div><span>Current Actual</span><strong>${forecastActual.actual.toFixed(2)}M</strong></div>
        <div><span>Projected</span><strong>${forecastActual.projected.toFixed(2)}M</strong></div>
        <div><span>Variance</span><strong>{forecastActual.variance}</strong></div>
        <div><span>Confidence</span><strong>{forecastActual.confidence}</strong></div>
      </div>
    </section>
  );
}

export default ForecastVsActual;
