import { useMemo, useState } from 'react';
import AutomationCoverage from '../components/operations/AutomationCoverage.jsx';
import BottleneckAnalysis from '../components/operations/BottleneckAnalysis.jsx';
import CapacityPlanning from '../components/operations/CapacityPlanning.jsx';
import EfficiencyOpportunities from '../components/operations/EfficiencyOpportunities.jsx';
import EfficiencyTrend from '../components/operations/EfficiencyTrend.jsx';
import OperationsActivity from '../components/operations/OperationsActivity.jsx';
import OperationsComparison from '../components/operations/OperationsComparison.jsx';
import OperationsFilters from '../components/operations/OperationsFilters.jsx';
import OperationsMetrics from '../components/operations/OperationsMetrics.jsx';
import ProcessDetailDrawer from '../components/operations/ProcessDetailDrawer.jsx';
import ProcessPerformance from '../components/operations/ProcessPerformance.jsx';
import RiskDetailPanel from '../components/operations/RiskDetailPanel.jsx';
import RiskIntelligence from '../components/operations/RiskIntelligence.jsx';
import SLAPerformance from '../components/operations/SLAPerformance.jsx';
import TeamPerformance from '../components/operations/TeamPerformance.jsx';
import WorkloadForecast from '../components/operations/WorkloadForecast.jsx';
import { operationalRisks, processPerformance } from '../data/operationsData.js';

function Operations({ onNavigate }) {
  const [filters, setFilters] = useState({
    dateRange: 'Last 30 Days',
    businessUnit: 'All Units',
    team: 'All Teams',
    region: 'All Regions',
    process: 'All Processes',
  });
  const [processSort, setProcessSort] = useState('Efficiency');
  const [teamSort, setTeamSort] = useState('Efficiency');
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [selectedRisk, setSelectedRisk] = useState(operationalRisks[1]);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const notify = (message) => setFeedback(message);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
    notify(`${key.replace(/([A-Z])/g, ' $1')} filter changed to ${value}.`);
  };

  const filteredProcesses = useMemo(() => {
    return processPerformance
      .filter((process) => filters.businessUnit === 'All Units' || process.businessUnit === filters.businessUnit)
      .filter((process) => filters.team === 'All Teams' || process.team === filters.team)
      .filter((process) => filters.region === 'All Regions' || process.region === filters.region)
      .filter((process) => filters.process === 'All Processes' || process.process === filters.process);
  }, [filters.businessUnit, filters.process, filters.region, filters.team]);

  const navigateRevenueImpact = () => {
    notify('Opening Revenue Analytics for operational impact review.');
    onNavigate('revenue');
  };

  return (
    <div className="overview-page operations-page">
      <section className="overview-hero operations-hero" aria-labelledby="operations-title">
        <div className="hero-copy">
          <span className="product-kicker">WTG Intelligence</span>
          <h1 id="operations-title">Operations Analytics</h1>
          <p>Monitor efficiency, capacity, service levels, automation coverage, and operational risk.</p>
        </div>

        <div className="revenue-action-area">
          <OperationsFilters
            filters={filters}
            onFilterChange={updateFilter}
            comparisonOpen={comparisonOpen}
            onCompare={() => {
              setComparisonOpen((current) => !current);
              notify(comparisonOpen ? 'Operations comparison hidden.' : 'Comparing operational performance against previous period.');
            }}
            onExport={() => {
              setExportOpen((current) => !current);
              notify('Operations report prepared for export.');
            }}
          />
          {exportOpen && (
            <div className="export-menu" aria-label="Operations report export options">
              {['PDF', 'CSV', 'Executive Summary'].map((option) => (
                <button key={option} type="button" onClick={() => notify(`${option} operations export prepared.`)}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="inline-status" aria-live="polite" aria-atomic="true">
        {feedback || `${filters.dateRange} / ${filters.businessUnit} / ${filters.team} / ${filters.region} / ${filters.process}`}
      </div>

      {comparisonOpen && <OperationsComparison />}

      <OperationsMetrics />

      <div className="dashboard-grid dashboard-grid--primary">
        <EfficiencyTrend selectedPeriod={filters.dateRange} />
        <SLAPerformance />
      </div>

      <ProcessPerformance processes={filteredProcesses} sortBy={processSort} onSort={setProcessSort} onSelect={setSelectedProcess} />

      <div className="dashboard-grid operations-analysis-grid">
        <AutomationCoverage />
        <CapacityPlanning activeTeam={filters.team} />
      </div>

      <div className="dashboard-grid operations-analysis-grid">
        <WorkloadForecast />
        <RiskIntelligence risks={operationalRisks} selectedRisk={selectedRisk} onSelect={setSelectedRisk} />
      </div>

      <RiskDetailPanel risk={selectedRisk} onAction={notify} onNavigateRevenue={navigateRevenueImpact} />

      <div className="dashboard-grid operations-analysis-grid">
        <BottleneckAnalysis />
        <OperationsActivity />
      </div>

      <EfficiencyOpportunities onAction={notify} />

      <TeamPerformance sortBy={teamSort} onSort={setTeamSort} />

      <ProcessDetailDrawer
        process={selectedProcess}
        onClose={() => setSelectedProcess(null)}
        onAction={notify}
        onNavigateRevenue={navigateRevenueImpact}
      />
    </div>
  );
}

export default Operations;
