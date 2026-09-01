import { segmentPerformance, segmentSorters } from '../../data/customersData.js';

function CustomerSegmentPerformance({ sortBy, onSort }) {
  const rows = [...segmentPerformance].sort((a, b) => segmentSorters[sortBy](b) - segmentSorters[sortBy](a));
  return (
    <section className="panel revenue-table-panel" aria-labelledby="customer-segment-title">
      <div className="panel__header">
        <div><span className="eyebrow">Segments</span><h2 id="customer-segment-title">Customer Segment Performance</h2></div>
        <label className="compact-select"><span>Sort by</span><select value={sortBy} onChange={(event) => onSort(event.target.value)}>{Object.keys(segmentSorters).map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Segment</th><th>Customers</th><th>Revenue</th><th>Retention</th><th>NRR</th><th>Expansion</th><th>Health Score</th><th>Churn Risk</th></tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.segment}><th scope="row">{row.segment}</th><td>{row.customers}</td><td>{row.revenue}</td><td>{row.retention}%</td><td>{row.nrr}%</td><td>{row.expansion}</td><td>{row.healthScore}</td><td>{row.churnRisk}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CustomerSegmentPerformance;
