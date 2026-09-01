import { forecastOpportunities } from '../../data/forecastingData.js';

function ForecastOpportunities({ onAction }) {
  return (
    <section className="panel" aria-labelledby="forecast-opps-title">
      <div className="panel__header"><div><span className="eyebrow">Upside</span><h2 id="forecast-opps-title">Upside Opportunities</h2></div></div>
      <div className="opportunity-grid">
        {forecastOpportunities.map((item) => <article className="opportunity-card" key={item.title}><div className="opportunity-card__top"><span>{item.confidence}</span><strong>{item.timing}</strong></div><h3>{item.title}</h3><p>Potential Upside</p><b>{item.upside}</b><small>Modeled as an upside accelerator for the active scenario.</small><button type="button" onClick={() => onAction(`Upside opportunity opened: ${item.title}.`)}>Explore</button></article>)}
      </div>
    </section>
  );
}

export default ForecastOpportunities;
