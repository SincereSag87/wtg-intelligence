function AssumptionControls({ assumptions, baseline, onChange, onReset, onApply }) {
  const fields = [
    ['Revenue Growth', 'revenueGrowth'],
    ['Customer Retention', 'customerRetention'],
    ['Expansion Rate', 'expansionRate'],
    ['Gross Margin', 'grossMargin'],
    ['Operating Cost Growth', 'operatingCostGrowth'],
    ['Automation Improvement', 'automationImprovement'],
    ['Customer Growth', 'customerGrowth'],
  ];

  return (
    <section className="panel" aria-labelledby="assumptions-title">
      <div className="panel__header"><div><span className="eyebrow">Editable Model Inputs</span><h2 id="assumptions-title">Forecast Assumptions</h2></div></div>
      <div className="assumption-grid">
        {fields.map(([label, key]) => (
          <label key={key}>
            <span>{label}</span>
            <input type="number" step="0.1" value={assumptions[key]} onChange={(event) => onChange(key, Number(event.target.value))} />
            <small>Baseline {baseline[key]}%</small>
          </label>
        ))}
      </div>
      <div className="button-row drawer-actions">
        <button className="button button--secondary" type="button" onClick={onReset}>Reset to Baseline</button>
        <button className="button button--primary" type="button" onClick={onApply}>Apply Assumptions</button>
      </div>
    </section>
  );
}

export default AssumptionControls;
