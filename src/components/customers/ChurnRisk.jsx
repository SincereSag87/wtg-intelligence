function ChurnRisk({ risks, selectedRisk, onSelect }) {
  const groups = ['High Risk', 'Medium Risk', 'Low Risk'];
  return (
    <section className="panel" aria-labelledby="churn-title">
      <div className="panel__header"><div><span className="eyebrow">Retention Risk</span><h2 id="churn-title">Churn Risk</h2></div></div>
      <div className="churn-groups">
        {groups.map((group) => (
          <div className="churn-group" key={group}>
            <h3>{group}</h3>
            {risks.filter((risk) => risk.group === group).map((risk) => (
              <button className={`risk-card ${selectedRisk?.id === risk.id ? 'is-selected' : ''}`} type="button" key={risk.id} onClick={() => onSelect(risk)} aria-pressed={selectedRisk?.id === risk.id}>
                <span className={`severity-dot severity-dot--${group.split(' ')[0].toLowerCase()}`} />
                <div><strong>{risk.customer}</strong><span>{risk.signal}</span></div>
                <small>Risk {risk.riskScore}</small><time>{risk.trend}</time>
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChurnRisk;
