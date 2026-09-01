import { retentionAnalytics } from '../../data/customersData.js';

function RetentionAnalytics() {
  const maxValue = Math.max(...retentionAnalytics.timeline.map((item) => item.value));
  return (
    <section className="panel" aria-labelledby="retention-title">
      <div className="panel__header"><div><span className="eyebrow">Renewals</span><h2 id="retention-title">Retention &amp; Renewal</h2></div></div>
      <div className="workload-grid retention-grid">{retentionAnalytics.metrics.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
      <div className="renewal-timeline" aria-label="Renewal timeline">
        {retentionAnalytics.timeline.map((item) => (
          <div key={item.month}><span>{item.month}</span><div className="progress-track"><span style={{ width: `${(item.value / maxValue) * 100}%` }} /></div><strong>${item.value.toFixed(2)}M</strong><small>{item.healthy}% healthy</small></div>
        ))}
      </div>
      <div className="composition-stack retention-stack" aria-label="Forecasted renewal outcome">{retentionAnalytics.outcome.map((item) => <span key={item.label} style={{ width: `${item.value}%` }} title={`${item.label}: ${item.value}%`} />)}</div>
    </section>
  );
}

export default RetentionAnalytics;
