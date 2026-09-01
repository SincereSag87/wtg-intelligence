import { useMemo, useState } from 'react';
import AssumptionControls from '../components/forecasting/AssumptionControls.jsx';
import CreateScenarioDialog from '../components/forecasting/CreateScenarioDialog.jsx';
import CustomerForecast from '../components/forecasting/CustomerForecast.jsx';
import DriverDetailPanel from '../components/forecasting/DriverDetailPanel.jsx';
import ForecastBrief from '../components/forecasting/ForecastBrief.jsx';
import ForecastChart from '../components/forecasting/ForecastChart.jsx';
import ForecastComparison from '../components/forecasting/ForecastComparison.jsx';
import ForecastConfidence from '../components/forecasting/ForecastConfidence.jsx';
import ForecastDrivers from '../components/forecasting/ForecastDrivers.jsx';
import ForecastFilters from '../components/forecasting/ForecastFilters.jsx';
import ForecastMetrics from '../components/forecasting/ForecastMetrics.jsx';
import ForecastOpportunities from '../components/forecasting/ForecastOpportunities.jsx';
import ForecastRisks from '../components/forecasting/ForecastRisks.jsx';
import ForecastTimeline from '../components/forecasting/ForecastTimeline.jsx';
import ModelPerformance from '../components/forecasting/ModelPerformance.jsx';
import OperationsForecast from '../components/forecasting/OperationsForecast.jsx';
import RevenueForecast from '../components/forecasting/RevenueForecast.jsx';
import ScenarioPlanning from '../components/forecasting/ScenarioPlanning.jsx';
import TargetPacing from '../components/forecasting/TargetPacing.jsx';
import {
  baselineAssumptions,
  forecastDrivers,
  scenarioData,
} from '../data/forecastingData.js';

function Forecasting({ onNavigate }) {
  const [controls, setControls] = useState({
    horizon: 'Quarter',
    scenario: 'Base Case',
    businessUnit: 'All Units',
    region: 'All Regions',
  });
  const [assumptions, setAssumptions] = useState(baselineAssumptions);
  const [customScenarios, setCustomScenarios] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(forecastDrivers[0]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(true);
  const [feedback, setFeedback] = useState('');

  const notify = (message) => setFeedback(message);

  const activeScenario = useMemo(() => {
    const custom = customScenarios.find((scenario) => scenario.name === controls.scenario);
    return custom ?? scenarioData[controls.scenario] ?? scenarioData['Base Case'];
  }, [controls.scenario, customScenarios]);

  const scenarioCards = useMemo(() => {
    const base = Object.entries(scenarioData).map(([name, values]) => ({ name, ...values }));
    return [...base, ...customScenarios];
  }, [customScenarios]);

  const updateControl = (key, value) => {
    setControls((current) => ({ ...current, [key]: value }));
    notify(`${key.replace(/([A-Z])/g, ' $1')} changed to ${value}.`);
  };

  const updateAssumption = (key, value) => {
    setAssumptions((current) => ({ ...current, [key]: value }));
  };

  const applyAssumptions = () => {
    const revenueLift = (assumptions.revenueGrowth - baselineAssumptions.revenueGrowth) / 100;
    const retentionLift = (assumptions.customerRetention - baselineAssumptions.customerRetention) / 200;
    const automationLift = (assumptions.automationImprovement - baselineAssumptions.automationImprovement) / 250;
    const revenue = Number((8.92 * (1 + revenueLift + retentionLift + automationLift)).toFixed(2));
    const margin = Number((assumptions.grossMargin + (assumptions.automationImprovement - baselineAssumptions.automationImprovement) * 0.08).toFixed(1));
    const scenario = {
      name: 'Adjusted Assumptions',
      revenue,
      margin,
      confidence: 87,
      customerGrowth: assumptions.customerGrowth,
      retention: assumptions.customerRetention,
      capacity: Math.max(70, Math.round(89 + (assumptions.operatingCostGrowth - baselineAssumptions.operatingCostGrowth))),
      riskExposure: Math.max(180, Math.round(384 - (assumptions.automationImprovement - 6.8) * 12)),
      range: [Number((revenue - 0.28).toFixed(2)), Number((revenue + 0.31).toFixed(2))],
    };
    setCustomScenarios((current) => [...current.filter((item) => item.name !== scenario.name), scenario]);
    setControls((current) => ({ ...current, scenario: scenario.name }));
    notify('Assumptions applied to an adjusted forecast scenario.');
  };

  const createScenario = (form) => {
    const revenue = Number((8.92 * (1 + (form.revenueGrowth - 8.4) / 100 + (form.expansion - 14.2) / 180)).toFixed(2));
    const scenario = {
      name: form.name || 'New Scenario',
      revenue,
      margin: Number((69.1 + (form.automation - 6) * 0.12 - (form.operatingCost - 4) * 0.08).toFixed(1)),
      confidence: 78,
      customerGrowth: Number((6.4 + (form.retention - 94.8) * 0.3).toFixed(1)),
      retention: form.retention,
      capacity: Math.min(99, 89 + form.capacity),
      riskExposure: 322,
      range: [Number((revenue - 0.34).toFixed(2)), Number((revenue + 0.42).toFixed(2))],
    };
    setCustomScenarios((current) => [...current.filter((item) => item.name !== scenario.name), scenario]);
    setControls((current) => ({ ...current, scenario: scenario.name }));
    setDialogOpen(false);
    notify(`${scenario.name} scenario created and selected.`);
  };

  return (
    <div className="overview-page forecasting-page">
      <section className="overview-hero forecasting-hero" aria-labelledby="forecasting-title">
        <div className="hero-copy">
          <span className="product-kicker">WTG Intelligence</span>
          <h1 id="forecasting-title">Forecasting</h1>
          <p>Model future performance, test assumptions, and understand the drivers behind your outlook.</p>
        </div>
        <div className="revenue-action-area">
          <ForecastFilters
            controls={controls}
            scenarios={customScenarios}
            onControlChange={updateControl}
            onCreate={() => setDialogOpen(true)}
            onExport={() => {
              setExportOpen((current) => !current);
              notify('Forecast package prepared for export.');
            }}
          />
          {exportOpen && <div className="export-menu" aria-label="Forecast export options">{['PDF', 'CSV', 'Forecast Model Summary', 'Executive Brief'].map((option) => <button type="button" key={option} onClick={() => notify(`${option} forecast export prepared.`)}>{option}</button>)}</div>}
        </div>
      </section>

      <div className="inline-status" aria-live="polite" aria-atomic="true">
        {feedback || `${controls.horizon} / ${controls.scenario} / ${controls.businessUnit} / ${controls.region}`}
      </div>

      <div className="button-row customer-compare-row">
        <button className={`button button--secondary ${comparisonOpen ? 'is-selected' : ''}`} type="button" onClick={() => { setComparisonOpen((current) => !current); notify(comparisonOpen ? 'Forecast comparison hidden.' : 'Forecast comparison shown.'); }}>Scenario Comparison</button>
        <button className="button button--secondary" type="button" onClick={() => onNavigate('revenue')}>View Revenue</button>
        <button className="button button--secondary" type="button" onClick={() => onNavigate('operations')}>View Capacity</button>
      </div>

      {comparisonOpen && <ForecastComparison />}

      <ForecastMetrics scenario={activeScenario} />

      <div className="dashboard-grid dashboard-grid--primary">
        <ForecastChart scenarioName={controls.scenario} scenario={activeScenario} />
        <TargetPacing />
      </div>

      <ScenarioPlanning scenarios={scenarioCards} selected={controls.scenario} onSelect={(scenario) => updateControl('scenario', scenario)} />

      <div className="dashboard-grid operations-analysis-grid">
        <ForecastDrivers drivers={forecastDrivers} selectedDriver={selectedDriver} onSelect={setSelectedDriver} />
        <DriverDetailPanel driver={selectedDriver} onAction={notify} onNavigate={onNavigate} />
      </div>

      <AssumptionControls assumptions={assumptions} baseline={baselineAssumptions} onChange={updateAssumption} onReset={() => { setAssumptions(baselineAssumptions); notify('Forecast assumptions reset to baseline.'); }} onApply={applyAssumptions} />

      <div className="dashboard-grid operations-analysis-grid">
        <ForecastConfidence confidence={activeScenario.confidence} />
        <RevenueForecast activeUnit={controls.businessUnit} />
      </div>

      <div className="dashboard-grid operations-analysis-grid">
        <CustomerForecast onNavigate={onNavigate} />
        <OperationsForecast onNavigate={onNavigate} />
      </div>

      <div className="dashboard-grid operations-analysis-grid">
        <ForecastRisks onAction={notify} />
        <ForecastOpportunities onAction={notify} />
      </div>

      <ForecastBrief scenario={activeScenario} onAction={notify} />

      <div className="dashboard-grid operations-analysis-grid">
        <ForecastTimeline />
        <ModelPerformance />
      </div>

      <CreateScenarioDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onCreate={createScenario} />
    </div>
  );
}

export default Forecasting;
