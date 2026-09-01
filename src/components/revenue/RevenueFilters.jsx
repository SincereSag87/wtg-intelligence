import { CalendarDays, Download, GitCompareArrows } from 'lucide-react';
import { businessUnitOptions, regionOptions, revenueDateRanges, segmentOptions } from '../../data/revenueData.js';

function RevenueFilters({ filters, onFilterChange, onExport, onCompare, comparisonOpen }) {
  return (
    <div className="revenue-controls" aria-label="Revenue filters">
      <label className="date-select">
        <CalendarDays size={17} aria-hidden="true" />
        <span className="sr-only">Date Range</span>
        <select value={filters.dateRange} onChange={(event) => onFilterChange('dateRange', event.target.value)}>
          {revenueDateRanges.map((range) => (
            <option key={range}>{range}</option>
          ))}
        </select>
      </label>

      <label className="filter-select">
        <span>Business Unit</span>
        <select value={filters.businessUnit} onChange={(event) => onFilterChange('businessUnit', event.target.value)}>
          {businessUnitOptions.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </label>

      <label className="filter-select">
        <span>Region</span>
        <select value={filters.region} onChange={(event) => onFilterChange('region', event.target.value)}>
          {regionOptions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </label>

      <label className="filter-select">
        <span>Segment</span>
        <select value={filters.segment} onChange={(event) => onFilterChange('segment', event.target.value)}>
          {segmentOptions.map((segment) => (
            <option key={segment}>{segment}</option>
          ))}
        </select>
      </label>

      <button className="button button--primary" type="button" onClick={onExport}>
        <Download size={17} aria-hidden="true" />
        Export Revenue Report
      </button>
      <button className={`button button--secondary ${comparisonOpen ? 'is-selected' : ''}`} type="button" onClick={onCompare}>
        <GitCompareArrows size={17} aria-hidden="true" />
        Compare Period
      </button>
    </div>
  );
}

export default RevenueFilters;
