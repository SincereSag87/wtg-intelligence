function ForecastPanel() {
  return (
    <section className="panel forecast-panel" aria-labelledby="forecast-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Forecasting</span>
          <h2 id="forecast-title">Quarter Forecast</h2>
        </div>
        <span className="status-pill">Above Plan</span>
      </div>

      <div className="forecast-value">
        <span>Projected Revenue</span>
        <strong>$8.92M</strong>
      </div>

      <div className="forecast-band" aria-label="Forecast range from 8.61 million to 9.24 million with target at 8.75 million">
        <span className="forecast-band__range" />
        <span className="forecast-band__target" />
        <span className="forecast-band__projected" />
      </div>

      <div className="forecast-grid">
        <div>
          <span>Forecast Range</span>
          <strong>$8.61M - $9.24M</strong>
        </div>
        <div>
          <span>Confidence</span>
          <strong>94%</strong>
        </div>
        <div>
          <span>Target</span>
          <strong>$8.75M</strong>
        </div>
      </div>
    </section>
  );
}

export default ForecastPanel;
