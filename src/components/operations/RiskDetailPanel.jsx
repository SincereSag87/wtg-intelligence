function RiskDetailPanel({ risk, onAction, onNavigateRevenue }) {
  if (!risk) return null;

  return (
    <section className="panel risk-detail-panel" aria-labelledby="risk-detail-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Selected Risk</span>
          <h2 id="risk-detail-title">{risk.type}</h2>
        </div>
        <span className={`status-pill risk-status risk-status--${risk.severity.toLowerCase()}`}>{risk.severity}</span>
      </div>

      <div className="drawer-metrics risk-metrics">
        <div><span>Risk</span><strong>{risk.type}</strong></div>
        <div><span>Affected Area</span><strong>{risk.area}</strong></div>
        <div><span>Severity</span><strong>{risk.severity}</strong></div>
        <div><span>Detected</span><strong>{risk.detected}</strong></div>
      </div>

      <div className="risk-impact">
        <span>Projected Impact</span>
        <p>{risk.impact}</p>
      </div>

      <div className="risk-detail-grid">
        <div>
          <h3>Contributing Factors</h3>
          <ul className="drawer-list">
            {risk.factors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Recommended Actions</h3>
          <ul className="drawer-list">
            {risk.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="button-row drawer-actions">
        <button className="button button--primary" type="button" onClick={() => onAction(`${risk.type} marked reviewed.`)}>
          Mark Reviewed
        </button>
        <button className="button button--secondary" type="button" onClick={() => onAction(`Action plan created for ${risk.area}.`)}>
          Create Action Plan
        </button>
        <button className="button button--secondary" type="button" onClick={() => onAction(`Opening process view for ${risk.area}.`)}>
          View Process
        </button>
        <button className="button button--secondary" type="button" onClick={onNavigateRevenue}>
          View Revenue Impact
        </button>
      </div>
    </section>
  );
}

export default RiskDetailPanel;
