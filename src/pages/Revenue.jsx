import { useMemo, useState } from 'react';
import CustomerRevenueDrawer from '../components/revenue/CustomerRevenueDrawer.jsx';
import CustomerRevenueTable from '../components/revenue/CustomerRevenueTable.jsx';
import ForecastVsActual from '../components/revenue/ForecastVsActual.jsx';
import GrowthDrivers from '../components/revenue/GrowthDrivers.jsx';
import MarginAnalysis from '../components/revenue/MarginAnalysis.jsx';
import PeriodComparison from '../components/revenue/PeriodComparison.jsx';
import RegionalPerformance from '../components/revenue/RegionalPerformance.jsx';
import RevenueComposition from '../components/revenue/RevenueComposition.jsx';
import RevenueFilters from '../components/revenue/RevenueFilters.jsx';
import RevenueMetrics from '../components/revenue/RevenueMetrics.jsx';
import RevenueOpportunities from '../components/revenue/RevenueOpportunities.jsx';
import RevenueTrendChart from '../components/revenue/RevenueTrendChart.jsx';
import { customers, customerSorters } from '../data/revenueData.js';

function Revenue() {
  const [filters, setFilters] = useState({
    dateRange: 'Quarter to Date',
    businessUnit: 'All Units',
    region: 'All Regions',
    segment: 'All Segments',
  });
  const [search, setSearch] = useState('');
  const [tableSegment, setTableSegment] = useState('All Segments');
  const [health, setHealth] = useState('All Health');
  const [customerSort, setCustomerSort] = useState('Revenue');
  const [segmentSort, setSegmentSort] = useState('Revenue');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const notify = (message) => setFeedback(message);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
    notify(`${key.replace(/([A-Z])/g, ' $1')} filter changed to ${value}.`);
  };

  const filteredCustomers = useMemo(() => {
    return customers
      .filter((customer) => filters.businessUnit === 'All Units' || customer.businessUnit === filters.businessUnit)
      .filter((customer) => filters.region === 'All Regions' || customer.region === filters.region)
      .filter((customer) => filters.segment === 'All Segments' || customer.segment === filters.segment)
      .filter((customer) => tableSegment === 'All Segments' || customer.segment === tableSegment)
      .filter((customer) => health === 'All Health' || customer.health === health)
      .filter((customer) => customer.customer.toLowerCase().includes(search.trim().toLowerCase()))
      .sort((a, b) => customerSorters[customerSort](b) - customerSorters[customerSort](a));
  }, [customerSort, filters.businessUnit, filters.region, filters.segment, health, search, tableSegment]);

  return (
    <div className="overview-page revenue-page">
      <section className="overview-hero revenue-hero" aria-labelledby="revenue-title">
        <div className="hero-copy">
          <span className="product-kicker">WTG Intelligence</span>
          <h1 id="revenue-title">Revenue Analytics</h1>
          <p>Understand growth, margin, and revenue performance across the business.</p>
        </div>

        <div className="revenue-action-area">
          <RevenueFilters
            filters={filters}
            onFilterChange={updateFilter}
            comparisonOpen={comparisonOpen}
            onCompare={() => {
              setComparisonOpen((current) => !current);
              notify(comparisonOpen ? 'Period comparison hidden.' : 'Comparing current period against previous period.');
            }}
            onExport={() => {
              setExportOpen((current) => !current);
              notify('Revenue report prepared for export.');
            }}
          />
          {exportOpen && (
            <div className="export-menu" aria-label="Export revenue report options">
              {['CSV', 'PDF', 'Executive Summary'].map((option) => (
                <button key={option} type="button" onClick={() => notify(`${option} revenue export prepared.`)}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="inline-status" aria-live="polite" aria-atomic="true">
        {feedback || `${filters.dateRange} / ${filters.businessUnit} / ${filters.region} / ${filters.segment}`}
      </div>

      {comparisonOpen && <PeriodComparison />}

      <RevenueMetrics />

      <div className="dashboard-grid dashboard-grid--primary">
        <RevenueTrendChart selectedPeriod={filters.dateRange} />
        <RevenueComposition activeUnit={filters.businessUnit} />
      </div>

      <div className="dashboard-grid revenue-analysis-grid">
        <SegmentPerformance sortBy={segmentSort} onSort={setSegmentSort} />
        <RegionalPerformance activeRegion={filters.region} />
      </div>

      <GrowthDrivers onAction={notify} />

      <CustomerRevenueTable
        customers={filteredCustomers}
        search={search}
        segment={tableSegment}
        health={health}
        sortBy={customerSort}
        onSearch={setSearch}
        onSegment={setTableSegment}
        onHealth={setHealth}
        onSort={setCustomerSort}
        onSelect={setSelectedCustomer}
      />

      <div className="dashboard-grid revenue-analysis-grid">
        <MarginAnalysis />
        <ForecastVsActual />
      </div>

      <RevenueOpportunities onAction={notify} />

      <CustomerRevenueDrawer
        customer={selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        onAction={notify}
      />
    </div>
  );
}

export default Revenue;
