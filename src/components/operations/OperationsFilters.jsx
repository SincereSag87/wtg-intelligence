import { CalendarDays, Download, GitCompareArrows } from 'lucide-react';
import {
  operationsBusinessUnits,
  operationsDateRanges,
  operationsProcesses,
  operationsRegions,
  operationsTeams,
} from '../../data/operationsData.js';

function OperationsFilters({ filters, onFilterChange, onExport, onCompare, comparisonOpen }) {
  return (
    <div className="revenue-controls operations-controls" aria-label="Operations filters">
      <label className="date-select">
        <CalendarDays size={17} aria-hidden="true" />
        <span className="sr-only">Date Range</span>
        <select value={filters.dateRange} onChange={(event) => onFilterChange('dateRange', event.target.value)}>
          {operationsDateRanges.map((range) => (
            <option key={range}>{range}</option>
          ))}
        </select>
      </label>
      <label className="filter-select">
        <span>Business Unit</span>
        <select value={filters.businessUnit} onChange={(event) => onFilterChange('businessUnit', event.target.value)}>
          {operationsBusinessUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </label>
      <label className="filter-select">
        <span>Team</span>
        <select value={filters.team} onChange={(event) => onFilterChange('team', event.target.value)}>
          {operationsTeams.map((team) => (
            <option key={team}>{team}</option>
          ))}
        </select>
      </label>
      <label className="filter-select">
        <span>Region</span>
        <select value={filters.region} onChange={(event) => onFilterChange('region', event.target.value)}>
          {operationsRegions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </label>
      <label className="filter-select">
        <span>Process</span>
        <select value={filters.process} onChange={(event) => onFilterChange('process', event.target.value)}>
          {operationsProcesses.map((process) => (
            <option key={process}>{process}</option>
          ))}
        </select>
      </label>
      <button className="button button--primary" type="button" onClick={onExport}>
        <Download size={17} aria-hidden="true" />
        Generate Operations Report
      </button>
      <button className={`button button--secondary ${comparisonOpen ? 'is-selected' : ''}`} type="button" onClick={onCompare}>
        <GitCompareArrows size={17} aria-hidden="true" />
        Compare Period
      </button>
    </div>
  );
}

export default OperationsFilters;
