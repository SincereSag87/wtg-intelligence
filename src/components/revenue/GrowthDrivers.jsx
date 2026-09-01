import { AlertTriangle, Brain, CheckCircle2, MessageSquareText, Telescope } from 'lucide-react';
import { growthDrivers } from '../../data/revenueData.js';

function GrowthDrivers({ onAction }) {
  return (
    <section className="panel intelligence-panel growth-panel" aria-labelledby="drivers-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">AI-Assisted</span>
          <h2 id="drivers-title">Growth Drivers</h2>
        </div>
        <span className="brief-badge">
          <Brain size={15} aria-hidden="true" />
          Driver Model
        </span>
      </div>

      <div className="driver-grid">
        <div>
          <h3>Positive Drivers</h3>
          <ul>
            {growthDrivers.positive.map((item) => (
              <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Risks</h3>
          <ul>
            {growthDrivers.risks.map((item) => (
              <li key={item}><AlertTriangle size={16} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Opportunities</h3>
          <ul>
            {growthDrivers.opportunities.map((item) => (
              <li key={item}><Telescope size={16} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="button-row">
        <button className="button button--primary" type="button" onClick={() => onAction('Opening growth driver analysis for Enterprise Services.')}>
          <Telescope size={17} aria-hidden="true" />
          Explore Driver
        </button>
        <button className="button button--secondary" type="button" onClick={() => onAction('Intelligence follow-up queued for revenue growth drivers.')}>
          <MessageSquareText size={17} aria-hidden="true" />
          Ask Intelligence
        </button>
      </div>
    </section>
  );
}

export default GrowthDrivers;
