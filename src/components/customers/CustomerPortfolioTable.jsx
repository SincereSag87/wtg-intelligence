import { Search } from 'lucide-react';
import { customerSorters } from '../../data/customersData.js';

function money(value) {
  return `$${Math.round(value / 1000)}K`;
}

function CustomerPortfolioTable({ customers, search, onSearch, sortBy, onSort, onSelect }) {
  return (
    <section className="panel revenue-table-panel customer-table-panel" aria-labelledby="portfolio-title">
      <div className="panel__header">
        <div><span className="eyebrow">Portfolio</span><h2 id="portfolio-title">Customer Portfolio</h2></div>
        <label className="customer-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search customer portfolio</span>
          <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search customers" />
        </label>
      </div>
      <div className="table-filters">
        <label className="compact-select"><span>Sort by</span><select value={sortBy} onChange={(event) => onSort(event.target.value)}>{Object.keys(customerSorters).map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Customer</th><th>Segment</th><th>Region</th><th>ARR / Revenue</th><th>Health</th><th>Retention Risk</th><th>Expansion Potential</th><th>Lifecycle Stage</th><th>Owner</th></tr></thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <th scope="row"><button className="link-button" type="button" onClick={() => onSelect(customer)}>{customer.customer}</button></th>
                <td>{customer.segment}</td><td>{customer.region}</td><td>{money(customer.revenue)}</td>
                <td><span className={`health-pill health-pill--${customer.health.toLowerCase().replaceAll(' ', '-')}`}>{customer.health}</span></td>
                <td>{customer.retentionRisk}</td><td>{money(customer.expansionPotential)}</td><td>{customer.lifecycle}</td><td>{customer.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {customers.length === 0 && <div className="empty-state">No customers match the current filters.</div>}
      </div>
    </section>
  );
}

export default CustomerPortfolioTable;
