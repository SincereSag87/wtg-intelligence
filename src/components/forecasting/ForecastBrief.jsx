import { Brain, FileText, MessageSquareText } from 'lucide-react';

function ForecastBrief({ scenario, onAction }) {
  return (
    <section className="panel intelligence-panel forecast-brief-panel" aria-labelledby="forecast-brief-title">
      <div className="panel__header"><div><span className="eyebrow">AI-Assisted</span><h2 id="forecast-brief-title">Forecast Brief</h2></div><span className="brief-badge"><Brain size={15} aria-hidden="true" />High Confidence</span></div>
      <p className="brief-summary">WTG Intelligence projects quarter revenue of ${scenario.revenue.toFixed(2)}M, approximately {((scenario.revenue / 8.75 - 1) * 100).toFixed(1)}% above target.</p>
      <div className="brief-list"><strong>Primary factors:</strong><ul><li>enterprise expansion continues to outperform</li><li>retention remains stronger than baseline</li><li>western region pipeline is converting above plan</li><li>customer operations capacity is the primary downside risk</li></ul></div>
      <div className="brief-next-step"><span>Recommended focus</span><p>Increase Customer Operations automation coverage before forecasted peak volume.</p></div>
      <div className="button-row"><button className="button button--secondary" type="button" onClick={() => onAction('Forecast follow-up queued.') }><MessageSquareText size={17} aria-hidden="true" />Ask Follow-up</button><button className="button button--secondary" type="button" onClick={() => onAction('Variance explanation prepared.')}>Explain Variance</button><button className="button button--primary" type="button" onClick={() => onAction('Executive forecast brief generated.') }><FileText size={17} aria-hidden="true" />Generate Executive Brief</button></div>
    </section>
  );
}

export default ForecastBrief;
