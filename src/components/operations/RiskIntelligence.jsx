function RiskIntelligence({ risks, selectedRisk, onSelect }) {
  return (
    <section className="panel" aria-labelledby="risk-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Risk Intelligence</span>
          <h2 id="risk-title">Operational Risks</h2>
        </div>
      </div>

      <div className="risk-list">
        {risks.map((risk) => (
          <button
            className={`risk-card ${selectedRisk?.id === risk.id ? 'is-selected' : ''}`}
            type="button"
            key={risk.id}
            onClick={() => onSelect(risk)}
            aria-pressed={selectedRisk?.id === risk.id}
          >
            <span className={`severity-dot severity-dot--${risk.severity.toLowerCase()}`} />
            <div>
              <strong>{risk.type}</strong>
              <span>{risk.area}</span>
            </div>
            <small>Severity: {risk.severity}</small>
            <time>{risk.detected}</time>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RiskIntelligence;
