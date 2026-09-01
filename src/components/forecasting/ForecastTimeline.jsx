import { forecastChanges } from '../../data/forecastingData.js';

function ForecastTimeline() {
  return (
    <section className="panel" aria-labelledby="forecast-timeline-title">
      <div className="panel__header"><div><span className="eyebrow">Model History</span><h2 id="forecast-timeline-title">Forecast Changes</h2></div></div>
      <div className="activity-feed">{forecastChanges.map((item) => <article className="activity-item" key={`${item.when}-${item.change}`}><span className="activity-icon">{item.impact}</span><div><h3>{item.when}</h3><p>{item.change}</p><time>{item.source}</time></div></article>)}</div>
    </section>
  );
}

export default ForecastTimeline;
