function DriverDetailPanel({ driver, onAction, onNavigate }) {
  if (!driver) return null;
  return (
    <section className="panel risk-detail-panel forecast-driver-detail" aria-labelledby="driver-detail-title">
      <div className="panel__header">
        <div><span className="eyebrow">Driver Detail</span><h2 id="driver-detail-title">{driver.label}</h2></div>
        <span className="status-pill">{driver.category}</span>
      </div>
      <div className="drawer-metrics risk-metrics">
        <div><span>Driver</span><strong>{driver.label}</strong></div><div><span>Impact</span><strong>{driver.impact > 0 ? '+' : '-'}${Math.abs(driver.impact)}K</strong></div>
        <div><span>Confidence</span><strong>{driver.confidence}%</strong></div><div><span>Affected Area</span><strong>{driver.area}</strong></div>
        <div><span>Time Horizon</span><strong>{driver.horizon}</strong></div>
      </div>
      <div className="risk-impact"><span>Why it matters</span><p>{driver.why}</p></div>
      <div className="risk-detail-grid">
        <div><h3>Supporting Signals</h3><ul className="drawer-list">{driver.signals.map((signal) => <li key={signal}>{signal}</li>)}</ul></div>
        <div><h3>Actions</h3><div className="button-row drawer-actions"><button className="button button--primary" type="button" onClick={() => onNavigate('customers')}>View Customers</button><button className="button button--secondary" type="button" onClick={() => onAction(`Assumption editor focused for ${driver.label}.`)}>Adjust Assumption</button><button className="button button--secondary" type="button" onClick={() => onAction(`Asked Intelligence about ${driver.label}.`)}>Ask Intelligence</button></div></div>
      </div>
    </section>
  );
}

export default DriverDetailPanel;
