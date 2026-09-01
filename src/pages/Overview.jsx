import { CalendarDays, Download, MessageSquareText, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import BusinessUnitPerformance from '../components/overview/BusinessUnitPerformance.jsx';
import CustomerHealth from '../components/overview/CustomerHealth.jsx';
import ExecutiveActivity from '../components/overview/ExecutiveActivity.jsx';
import ForecastPanel from '../components/overview/ForecastPanel.jsx';
import IntelligenceBrief from '../components/overview/IntelligenceBrief.jsx';
import MetricCard from '../components/overview/MetricCard.jsx';
import OperationalHealth from '../components/overview/OperationalHealth.jsx';
import PerformanceChart from '../components/overview/PerformanceChart.jsx';
import QuickReports from '../components/overview/QuickReports.jsx';
import { dateRanges, kpis } from '../data/overviewData.js';

function Overview() {
  const [dateRange, setDateRange] = useState(dateRanges[0]);
  const [feedback, setFeedback] = useState('');

  const notify = (message) => setFeedback(message);

  return (
    <div className="overview-page">
      <section className="overview-hero" aria-labelledby="overview-title">
        <div className="hero-copy">
          <span className="product-kicker">WTG Intelligence</span>
          <h1 id="overview-title">Business performance at a glance.</h1>
          <p>Monitor revenue, operations, customers, and forecasts from one connected intelligence workspace.</p>
          <div className="freshness">
            <RefreshCw size={15} aria-hidden="true" />
            <span>Updated 4 minutes ago</span>
          </div>
        </div>

        <div className="hero-controls">
          <label className="date-select">
            <CalendarDays size={17} aria-hidden="true" />
            <span className="sr-only">Date Range</span>
            <select value={dateRange} onChange={(event) => notify(`Date range changed to ${event.target.value}.`) || setDateRange(event.target.value)}>
              {dateRanges.map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>
          </label>
          <button className="button button--primary" type="button" onClick={() => notify(`Generating executive report for ${dateRange}.`)}>
            <Download size={17} aria-hidden="true" />
            Generate Report
          </button>
          <button className="button button--secondary" type="button" onClick={() => notify('Intelligence prompt ready: ask about revenue, operations, or customers.')}>
            <MessageSquareText size={17} aria-hidden="true" />
            Ask Intelligence
          </button>
        </div>
      </section>

      <div className="inline-status" aria-live="polite" aria-atomic="true">
        {feedback || `Date Range: ${dateRange}`}
      </div>

      <section className="metric-grid" aria-label="Executive KPI cards">
        {kpis.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <div className="dashboard-grid dashboard-grid--primary">
        <PerformanceChart />
        <IntelligenceBrief onAction={notify} />
      </div>

      <div className="dashboard-grid dashboard-grid--secondary">
        <BusinessUnitPerformance />
        <OperationalHealth />
        <ForecastPanel />
        <CustomerHealth />
        <ExecutiveActivity />
        <QuickReports onView={notify} />
      </div>
    </div>
  );
}

export default Overview;
