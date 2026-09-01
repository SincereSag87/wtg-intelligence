import MetricCard from '../overview/MetricCard.jsx';
import { customerKpis } from '../../data/customersData.js';

function CustomerMetrics() {
  return (
    <section className="metric-grid customer-metric-grid" aria-label="Customer KPI cards">
      {customerKpis.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
    </section>
  );
}

export default CustomerMetrics;
