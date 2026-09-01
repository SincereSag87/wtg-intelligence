import { customerDistribution, customerMetrics } from '../../data/overviewData.js';

function CustomerHealth() {
  return (
    <section className="panel" aria-labelledby="customer-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Customers</span>
          <h2 id="customer-title">Customer Intelligence</h2>
        </div>
      </div>

      <div className="customer-metrics">
        {customerMetrics.map((metric) => (
          <div key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="distribution" aria-label="Customer health distribution">
        {customerDistribution.map((segment) => (
          <div key={segment.label}>
            <div>
              <span>{segment.label}</span>
              <strong>{segment.value}%</strong>
            </div>
            <div className={`progress-track distribution--${segment.label.toLowerCase().replaceAll(' ', '-')}`}>
              <span style={{ width: `${segment.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerHealth;
