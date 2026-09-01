import { healthDistribution, segmentPerformance } from '../../data/customersData.js';

function CustomerHealthDistribution() {
  return (
    <section className="panel customer-health-panel" aria-labelledby="customer-health-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Portfolio Health</span>
          <h2 id="customer-health-title">Customer Health</h2>
        </div>
        <span className="health-score">88 / 100</span>
      </div>
      <p className="sr-only">Customer health is 74 percent healthy, 19 percent watch, and 7 percent at risk.</p>
      <div className="health-donut" aria-hidden="true">
        <span>74%</span>
      </div>
      <div className="health-distribution-list">
        {healthDistribution.map((item) => (
          <article className={`health-distribution-item health-distribution-item--${item.label.toLowerCase().replaceAll(' ', '-')}`} key={item.label}>
            <div><h3>{item.label}</h3><span>{item.accounts.toLocaleString()} accounts</span></div>
            <strong>{item.percent}%</strong>
            <div className="progress-track"><span style={{ width: `${item.percent}%` }} /></div>
            <small>{item.revenue} represented / Trend {item.trend}</small>
          </article>
        ))}
      </div>
      <div className="segment-mini-grid">
        {segmentPerformance.map((segment) => (
          <div key={segment.segment}><span>{segment.segment}</span><strong>{segment.healthScore}</strong></div>
        ))}
      </div>
    </section>
  );
}

export default CustomerHealthDistribution;
