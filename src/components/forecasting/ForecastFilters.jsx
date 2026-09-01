import { Download, Layers3, Plus } from 'lucide-react';
import { forecastBusinessUnits, forecastHorizons, forecastRegions, scenarioNames } from '../../data/forecastingData.js';

function ForecastFilters({ controls, scenarios, onControlChange, onCreate, onExport }) {
  const scenarioOptions = [...new Set([...scenarioNames, ...scenarios.map((scenario) => scenario.name)])];

  return (
    <div className="revenue-controls forecast-controls" aria-label="Forecast controls">
      <label className="filter-select">
        <span>Forecast Horizon</span>
        <select value={controls.horizon} onChange={(event) => onControlChange('horizon', event.target.value)}>
          {forecastHorizons.map((horizon) => <option key={horizon}>{horizon}</option>)}
        </select>
      </label>
      <label className="filter-select">
        <span>Scenario</span>
        <select value={controls.scenario} onChange={(event) => onControlChange('scenario', event.target.value)}>
          {scenarioOptions.map((scenario) => <option key={scenario}>{scenario}</option>)}
        </select>
      </label>
      <label className="filter-select">
        <span>Business Unit</span>
        <select value={controls.businessUnit} onChange={(event) => onControlChange('businessUnit', event.target.value)}>
          {forecastBusinessUnits.map((unit) => <option key={unit}>{unit}</option>)}
        </select>
      </label>
      <label className="filter-select">
        <span>Region</span>
        <select value={controls.region} onChange={(event) => onControlChange('region', event.target.value)}>
          {forecastRegions.map((region) => <option key={region}>{region}</option>)}
        </select>
      </label>
      <button className="button button--primary" type="button" onClick={onCreate}>
        <Plus size={17} aria-hidden="true" />
        Create Scenario
      </button>
      <button className="button button--secondary" type="button" onClick={onExport}>
        <Download size={17} aria-hidden="true" />
        Export Forecast
      </button>
      <span className="forecast-mode-chip"><Layers3 size={15} aria-hidden="true" />Strategic model</span>
    </div>
  );
}

export default ForecastFilters;
