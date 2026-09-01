import { forecastRisks } from '../../data/forecastingData.js';

function ForecastRisks({ onAction }) {
  return (
    <section className="panel" aria-labelledby="forecast-risks-title">
      <div className="panel__header"><div><span className="eyebrow">Downside</span><h2 id="forecast-risks-title">Forecast Risks</h2></div></div>
      <div className="opportunity-grid">
        {forecastRisks.map((risk) => <article className="opportunity-card opportunity-card--risk" key={risk.title}><div className="opportunity-card__top"><span>{risk.probability}</span><strong>{risk.confidence}</strong></div><h3>{risk.title}</h3><p>Potential Impact</p><b>{risk.impact}</b><small>{risk.horizon}. Mitigation: {risk.mitigation}.</small><button type="button" onClick={() => onAction(`Forecast risk reviewed: ${risk.title}.`)}>Review</button></article>)}
      </div>
    </section>
  );
}

export default ForecastRisks;
