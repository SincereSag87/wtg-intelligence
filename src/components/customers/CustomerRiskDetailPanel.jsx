function money(value) {
  return `$${Math.round(value / 1000)}K`;
}

function CustomerRiskDetailPanel({ risk, onAction, onOpenCustomer }) {
  if (!risk) return null;
  return (
    <section className="panel risk-detail-panel" aria-labelledby="customer-risk-title">
      <div className="panel__header">
        <div><span className="eyebrow">Risk Detail</span><h2 id="customer-risk-title">{risk.customer}</h2></div>
        <span className="status-pill">{risk.group}</span>
      </div>
      <div className="drawer-metrics risk-metrics">
        <div><span>Customer</span><strong>{risk.customer}</strong></div><div><span>Risk Score</span><strong>{risk.riskScore}</strong></div>
        <div><span>Revenue at Risk</span><strong>{money(risk.revenueAtRisk)}</strong></div><div><span>Renewal Date</span><strong>{risk.renewalDate}</strong></div>
        <div><span>Primary Signal</span><strong>{risk.signal}</strong></div><div><span>Detected</span><strong>{risk.detected}</strong></div>
        <div><span>Confidence</span><strong>{risk.confidence}</strong></div>
      </div>
      <div className="risk-detail-grid">
        <div><h3>Contributing Signals</h3><ul className="drawer-list">{risk.signals.map((signal) => <li key={signal}>{signal}</li>)}</ul></div>
        <div><h3>Recommended Actions</h3><ul className="drawer-list">{['executive outreach', 'service review', 'adoption workshop', 'renewal planning'].map((action) => <li key={action}>{action}</li>)}</ul></div>
      </div>
      <div className="button-row drawer-actions">
        <button className="button button--primary" type="button" onClick={() => onAction(`${risk.customer} risk marked reviewed.`)}>Mark Reviewed</button>
        <button className="button button--secondary" type="button" onClick={() => onAction(`Retention plan created for ${risk.customer}.`)}>Create Retention Plan</button>
        <button className="button button--secondary" type="button" onClick={() => onOpenCustomer(risk.customer)}>Open Customer</button>
      </div>
    </section>
  );
}

export default CustomerRiskDetailPanel;
