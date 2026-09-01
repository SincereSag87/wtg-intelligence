function ScenarioPlanning({ scenarios, selected, onSelect }) {
  return (
    <section className="panel" aria-labelledby="scenario-title">
      <div className="panel__header"><div><span className="eyebrow">Scenario Planning</span><h2 id="scenario-title">Scenario Outcomes</h2></div></div>
      <div className="scenario-grid">
        {scenarios.map((scenario) => (
          <button className={`scenario-card ${selected === scenario.name ? 'is-selected' : ''}`} type="button" key={scenario.name} onClick={() => onSelect(scenario.name)} aria-pressed={selected === scenario.name}>
            <span>{scenario.name}</span><strong>${scenario.revenue.toFixed(2)}M</strong>
            <small>Margin {scenario.margin}% / Confidence {scenario.confidence}%</small>
            <div className="progress-track"><span style={{ width: `${Math.min((scenario.revenue / 9.6) * 100, 100)}%` }} /></div>
            <em>Growth +{scenario.customerGrowth}% / Retention {scenario.retention}% / Capacity {scenario.capacity}% / Risk ${scenario.riskExposure}K</em>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ScenarioPlanning;
