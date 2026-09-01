import { Brain, CheckCircle2, MessageSquareText, Sparkles } from 'lucide-react';
import { insightOpportunities } from '../../data/overviewData.js';

function IntelligenceBrief({ onAction }) {
  return (
    <section className="panel intelligence-panel" aria-labelledby="brief-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">AI Analysis</span>
          <h2 id="brief-title">Intelligence Brief</h2>
        </div>
        <span className="brief-badge">
          <Sparkles size={15} aria-hidden="true" />
          High Confidence
        </span>
      </div>

      <p className="brief-summary">
        Revenue is trending 8.7% above forecast this month, driven primarily by Enterprise Services and improved
        customer retention.
      </p>

      <div className="brief-list">
        <strong>Three opportunities detected:</strong>
        <ul>
          {insightOpportunities.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="button-row">
        <button className="button button--primary" type="button" onClick={() => onAction('Opened the Enterprise Services growth insight.')}>
          <Brain size={17} aria-hidden="true" />
          Explore Insight
        </button>
        <button className="button button--secondary" type="button" onClick={() => onAction('Follow-up queued: explain churn risk by customer segment.')}>
          <MessageSquareText size={17} aria-hidden="true" />
          Ask Follow-up
        </button>
      </div>
    </section>
  );
}

export default IntelligenceBrief;
