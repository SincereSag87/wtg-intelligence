import MetricCard from '../overview/MetricCard.jsx';
import { revenueKpis } from '../../data/revenueData.js';

function RevenueMetrics() {
  return (
    <section className="metric-grid revenue-metric-grid" aria-label="Revenue KPI cards">
      {revenueKpis.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </section>
  );
}

export default RevenueMetrics;
