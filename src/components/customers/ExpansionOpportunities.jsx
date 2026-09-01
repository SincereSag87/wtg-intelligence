import { expansionOpportunities, expansionSorters } from '../../data/customersData.js';

function money(value) {
  return `$${Math.round(value / 1000)}K`;
}

function ExpansionOpportunities({ sortBy, onSort, onAction }) {
  const rows = [...expansionOpportunities].sort((a, b) => expansionSorters[sortBy](b) - expansionSorters[sortBy](a));
  return (
    <section className="panel" aria-labelledby="customer-expansion-title">
      <div className="panel__header">
        <div><span className="eyebrow">Expansion</span><h2 id="customer-expansion-title">Expansion Opportunities</h2></div>
        <label className="compact-select"><span>Sort by</span><select value={sortBy} onChange={(event) => onSort(event.target.value)}>{Object.keys(expansionSorters).map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <div className="opportunity-grid customer-opportunity-grid">
        {rows.map((item) => (
          <article className="opportunity-card" key={item.customer}>
            <div className="opportunity-card__top"><span>{item.confidence}%</span><strong>{item.timing}</strong></div>
            <h3>{item.customer}</h3><p>Potential</p><b>{money(item.value)}</b>
            <small>{item.recommendation}. Adoption gap: {item.gap}.</small>
            <button type="button" onClick={() => onAction(`Expansion opportunity opened for ${item.customer}.`)}>Review</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExpansionOpportunities;
