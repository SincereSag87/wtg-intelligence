import { Brain, Sparkles } from 'lucide-react';
import { efficiencyOpportunities } from '../../data/operationsData.js';

function EfficiencyOpportunities({ onAction }) {
  return (
    <section className="panel intelligence-panel" aria-labelledby="efficiency-opportunity-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">AI-Assisted</span>
          <h2 id="efficiency-opportunity-title">Efficiency Opportunities</h2>
        </div>
        <span className="brief-badge">
          <Sparkles size={15} aria-hidden="true" />
          Savings Model
        </span>
      </div>

      <div className="opportunity-grid operations-opportunity-grid">
        {efficiencyOpportunities.map((item) => (
          <article className="opportunity-card" key={item.title}>
            <div className="opportunity-card__top">
              <span><Brain size={16} aria-hidden="true" /></span>
              <strong>{item.confidence}</strong>
            </div>
            <h3>{item.title}</h3>
            <p>Potential Savings</p>
            <b>{item.savings}</b>
            <small>Effort: {item.effort}. {item.next}</small>
            <button type="button" onClick={() => onAction(`Exploring opportunity: ${item.title}.`)}>Explore Opportunity</button>
          </article>
        ))}
      </div>

      <div className="button-row">
        <button className="button button--secondary" type="button" onClick={() => onAction('Intelligence follow-up queued for efficiency opportunities.')}>
          Ask Intelligence
        </button>
      </div>
    </section>
  );
}

export default EfficiencyOpportunities;
