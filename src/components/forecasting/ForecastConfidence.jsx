import { confidenceBreakdown } from '../../data/forecastingData.js';

function ForecastConfidence({ confidence }) {
  return (
    <section className="panel" aria-labelledby="confidence-title">
      <div className="panel__header"><div><span className="eyebrow">Forecast Quality</span><h2 id="confidence-title">Forecast Confidence</h2></div><span className="health-score">{confidence}% Overall</span></div>
      <div className="health-list">
        {confidenceBreakdown.map((item) => (
          <div className="health-metric" key={item.label}>
            <div><span>{item.label}</span><strong>{item.value}%</strong></div>
            <div className="progress-track" aria-label={`${item.label}: ${item.value} percent. ${item.effect}`}><span style={{ width: `${item.value}%` }} /></div>
            <small>{item.effect}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ForecastConfidence;
