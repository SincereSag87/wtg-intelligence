import { slaPerformance } from '../../data/operationsData.js';

function SLAPerformance() {
  const maxTrend = Math.max(...slaPerformance.trend);

  return (
    <section className="panel" aria-labelledby="sla-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Service Levels</span>
          <h2 id="sla-title">SLA Performance</h2>
        </div>
      </div>

      <div className="sla-summary">
        {slaPerformance.summary.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>

      <div className="mini-bars sla-trend" aria-label="SLA performance trend">
        {slaPerformance.trend.map((value, index) => (
          <span key={`${value}-${index}`} style={{ height: `${(value / maxTrend) * 100}%` }} title={`Period ${index + 1}: ${value}%`} />
        ))}
      </div>

      <div className="health-list">
        {slaPerformance.teams.map((item) => (
          <div className="health-metric" key={item.label}>
            <div><span>{item.label}</span><strong>{item.value}%</strong></div>
            <div className="progress-track" aria-label={`${item.label}: ${item.value}% SLA and ${item.breaches} breaches`}>
              <span style={{ width: `${item.value}%` }} />
            </div>
            <small>{item.breaches} breach count</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SLAPerformance;
