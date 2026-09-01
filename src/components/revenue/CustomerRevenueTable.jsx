import { ArrowDownUp, Search } from 'lucide-react';
import { customerSorters, healthOptions, segmentOptions } from '../../data/revenueData.js';

function formatCurrency(value) {
  return `$${Math.round(value / 1000)}K`;
}

function CustomerRevenueTable({ customers, search, segment, health, sortBy, onSearch, onSegment, onHealth, onSort, onSelect }) {
  return (
    <section className="panel revenue-table-panel customer-table-panel" aria-labelledby="customer-revenue-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Customers</span>
          <h2 id="customer-revenue-title">Customer Revenue</h2>
        </div>
        <label className="customer-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search customers</span>
          <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search customers" />
        </label>
      </div>

      <div className="table-filters">
        <label className="compact-select">
          <span>Segment</span>
          <select value={segment} onChange={(event) => onSegment(event.target.value)}>
            {segmentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="compact-select">
          <span>Health</span>
          <select value={health} onChange={(event) => onHealth(event.target.value)}>
            {healthOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="compact-select">
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => onSort(event.target.value)}>
            {Object.keys(customerSorters).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Segment</th>
              <th>Region</th>
              <th>Revenue</th>
              <th>Growth</th>
              <th>Contract Value</th>
              <th>Renewal Date</th>
              <th>Health</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <th scope="row">
                  <button className="link-button" type="button" onClick={() => onSelect(customer)}>
                    {customer.customer}
                  </button>
                </th>
                <td>{customer.segment}</td>
                <td>{customer.region}</td>
                <td>{formatCurrency(customer.revenue)}</td>
                <td className="positive">+{customer.growth}%</td>
                <td>{formatCurrency(customer.contractValue)}</td>
                <td>{customer.renewalDate}</td>
                <td><span className={`health-pill health-pill--${customer.health.toLowerCase().replaceAll(' ', '-')}`}>{customer.health}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        {customers.length === 0 && <div className="empty-state">No customer revenue records match the current filters.</div>}
      </div>

      <div className="table-note">
        <ArrowDownUp size={14} aria-hidden="true" />
        <span>Sorted by {sortBy}</span>
      </div>
    </section>
  );
}

export default CustomerRevenueTable;
