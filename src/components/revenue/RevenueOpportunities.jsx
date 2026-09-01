import { ArrowUpRight, ShieldAlert } from 'lucide-react';
import { revenueOpportunities } from '../../data/revenueData.js';

function RevenueOpportunities({ onAction }) {
  return (
    <section className="panel" aria-labelledby="opportunity-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Pipeline Intelligence</span>
          <h2 id="opportunity-title">Revenue Opportunities</h2>
        </div>
      </div>

      <div className="opportunity-grid">
        {revenueOpportunities.map((item) => {
          const isRisk = item.type === 'At-Risk Revenue';
          const Icon = isRisk ? ShieldAlert : ArrowUpRight;
          return (
            <article className={`opportunity-card ${isRisk ? 'opportunity-card--risk' : ''}`} key={item.type}>
              <div className="opportunity-card__top">
                <span><Icon size={16} aria-hidden="true" /></span>
                <strong>{item.confidence}</strong>
              </div>
              <h3>{item.type}</h3>
              <p>Estimated Upside</p>
              <b>{item.value}</b>
              <small>{item.action}</small>
              <button type="button" onClick={() => onAction(`${item.type} action opened.`)}>Review</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default RevenueOpportunities;
