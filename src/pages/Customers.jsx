import { useMemo, useState } from 'react';
import AdoptionIntelligence from '../components/customers/AdoptionIntelligence.jsx';
import ChurnRisk from '../components/customers/ChurnRisk.jsx';
import CohortAnalysis from '../components/customers/CohortAnalysis.jsx';
import CustomerActivity from '../components/customers/CustomerActivity.jsx';
import CustomerComparison from '../components/customers/CustomerComparison.jsx';
import CustomerDetailDrawer from '../components/customers/CustomerDetailDrawer.jsx';
import CustomerExperience from '../components/customers/CustomerExperience.jsx';
import CustomerFilters from '../components/customers/CustomerFilters.jsx';
import CustomerHealthDistribution from '../components/customers/CustomerHealthDistribution.jsx';
import CustomerHealthTrend from '../components/customers/CustomerHealthTrend.jsx';
import CustomerMetrics from '../components/customers/CustomerMetrics.jsx';
import CustomerPortfolioTable from '../components/customers/CustomerPortfolioTable.jsx';
import CustomerRiskDetailPanel from '../components/customers/CustomerRiskDetailPanel.jsx';
import CustomerSegmentPerformance from '../components/customers/CustomerSegmentPerformance.jsx';
import CustomerLifecycle from '../components/customers/CustomerLifecycle.jsx';
import ExpansionOpportunities from '../components/customers/ExpansionOpportunities.jsx';
import RetentionAnalytics from '../components/customers/RetentionAnalytics.jsx';
import { churnRisks, customerAccounts, customerSorters } from '../data/customersData.js';

function Customers({ onNavigate }) {
  const [filters, setFilters] = useState({
    dateRange: 'Quarter to Date',
    segment: 'All Segments',
    region: 'All Regions',
    health: 'All Health',
    lifecycle: 'All Stages',
  });
  const [search, setSearch] = useState('');
  const [customerSort, setCustomerSort] = useState('Revenue');
  const [segmentSort, setSegmentSort] = useState('Health Score');
  const [expansionSort, setExpansionSort] = useState('Value');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedRisk, setSelectedRisk] = useState(churnRisks[0]);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const notify = (message) => setFeedback(message);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
    notify(`${key.replace(/([A-Z])/g, ' $1')} filter changed to ${value}.`);
  };

  const filteredCustomers = useMemo(() => {
    return customerAccounts
      .filter((customer) => filters.segment === 'All Segments' || customer.segment === filters.segment)
      .filter((customer) => filters.region === 'All Regions' || customer.region === filters.region)
      .filter((customer) => filters.health === 'All Health' || customer.health === filters.health)
      .filter((customer) => filters.lifecycle === 'All Stages' || customer.lifecycle === filters.lifecycle)
      .filter((customer) => customer.customer.toLowerCase().includes(search.trim().toLowerCase()))
      .sort((a, b) => customerSorters[customerSort](b) - customerSorters[customerSort](a));
  }, [customerSort, filters.health, filters.lifecycle, filters.region, filters.segment, search]);

  const openCustomerFromRisk = (customerName) => {
    const match = customerAccounts.find((customer) => customer.customer === customerName);
    if (match) setSelectedCustomer(match);
  };

  return (
    <div className="overview-page customers-page">
      <section className="overview-hero customers-hero" aria-labelledby="customers-title">
        <div className="hero-copy">
          <span className="product-kicker">WTG Intelligence</span>
          <h1 id="customers-title">Customer Intelligence</h1>
          <p>Understand customer health, retention risk, expansion potential, and lifecycle performance.</p>
        </div>
        <div className="revenue-action-area">
          <CustomerFilters
            filters={filters}
            onFilterChange={updateFilter}
            onReport={() => {
              setExportOpen((current) => !current);
              notify('Customer intelligence report prepared for export.');
            }}
            onAsk={() => {
              setAskOpen((current) => !current);
              notify('Customer Intelligence prompt options are ready.');
            }}
          />
          {exportOpen && <div className="export-menu" aria-label="Customer report export options">{['PDF', 'CSV', 'Executive Summary'].map((option) => <button key={option} type="button" onClick={() => notify(`${option} customer intelligence export prepared.`)}>{option}</button>)}</div>}
          {askOpen && (
            <div className="ai-question-menu" aria-label="Suggested customer intelligence questions">
              {[
                'Which accounts have the highest churn risk?',
                'Where is the strongest expansion opportunity?',
                'Which customer segment is improving fastest?',
                'What is driving NRR growth?',
              ].map((question) => <button key={question} type="button" onClick={() => notify(`Asked Intelligence: ${question}`)}>{question}</button>)}
            </div>
          )}
        </div>
      </section>

      <div className="inline-status" aria-live="polite" aria-atomic="true">
        {feedback || `${filters.dateRange} / ${filters.segment} / ${filters.region} / ${filters.health} / ${filters.lifecycle}`}
      </div>

      <div className="button-row customer-compare-row">
        <button className={`button button--secondary ${comparisonOpen ? 'is-selected' : ''}`} type="button" onClick={() => { setComparisonOpen((current) => !current); notify(comparisonOpen ? 'Customer comparison hidden.' : 'Comparing customer portfolio against previous period.'); }}>
          Compare Period
        </button>
        <button className="button button--secondary" type="button" onClick={() => { notify('Opening Operations Analytics for customer-impacting operational issues.'); onNavigate('operations'); }}>
          View Operational Issues
        </button>
      </div>

      {comparisonOpen && <CustomerComparison />}

      <CustomerMetrics />

      <div className="dashboard-grid dashboard-grid--primary">
        <CustomerHealthDistribution />
        <CustomerHealthTrend />
      </div>

      <CustomerSegmentPerformance sortBy={segmentSort} onSort={setSegmentSort} />

      <CustomerPortfolioTable customers={filteredCustomers} search={search} onSearch={setSearch} sortBy={customerSort} onSort={setCustomerSort} onSelect={setSelectedCustomer} />

      <div className="dashboard-grid operations-analysis-grid">
        <ChurnRisk risks={churnRisks} selectedRisk={selectedRisk} onSelect={setSelectedRisk} />
        <CustomerRiskDetailPanel risk={selectedRisk} onAction={notify} onOpenCustomer={openCustomerFromRisk} />
      </div>

      <ExpansionOpportunities sortBy={expansionSort} onSort={setExpansionSort} onAction={notify} />

      <div className="dashboard-grid operations-analysis-grid">
        <CustomerLifecycle />
        <RetentionAnalytics />
      </div>

      <div className="dashboard-grid operations-analysis-grid">
        <CohortAnalysis />
        <AdoptionIntelligence />
      </div>

      <div className="dashboard-grid operations-analysis-grid">
        <CustomerExperience />
        <CustomerActivity />
      </div>

      <CustomerDetailDrawer customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} onAction={notify} onNavigate={onNavigate} />
    </div>
  );
}

export default Customers;
