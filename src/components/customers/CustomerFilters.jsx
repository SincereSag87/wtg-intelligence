import { CalendarDays, Download, MessageSquareText } from 'lucide-react';
import { customerDateRanges, customerHealthOptions, customerRegions, customerSegments, lifecycleStages } from '../../data/customersData.js';

function CustomerFilters({ filters, onFilterChange, onReport, onAsk }) {
  return (
    <div className="revenue-controls customer-controls" aria-label="Customer filters">
      <label className="date-select">
        <CalendarDays size={17} aria-hidden="true" />
        <span className="sr-only">Date Range</span>
        <select value={filters.dateRange} onChange={(event) => onFilterChange('dateRange', event.target.value)}>
          {customerDateRanges.map((range) => <option key={range}>{range}</option>)}
        </select>
      </label>
      {[
        ['Segment', 'segment', customerSegments],
        ['Region', 'region', customerRegions],
        ['Health', 'health', customerHealthOptions],
        ['Lifecycle Stage', 'lifecycle', lifecycleStages],
      ].map(([label, key, options]) => (
        <label className="filter-select" key={key}>
          <span>{label}</span>
          <select value={filters[key]} onChange={(event) => onFilterChange(key, event.target.value)}>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      ))}
      <button className="button button--primary" type="button" onClick={onReport}>
        <Download size={17} aria-hidden="true" />
        Generate Customer Report
      </button>
      <button className="button button--secondary" type="button" onClick={onAsk}>
        <MessageSquareText size={17} aria-hidden="true" />
        Ask Intelligence
      </button>
    </div>
  );
}

export default CustomerFilters;
