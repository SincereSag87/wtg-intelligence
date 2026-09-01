import MetricCard from '../overview/MetricCard.jsx';
import { operationsKpis } from '../../data/operationsData.js';

function OperationsMetrics() {
  return (
    <section className="metric-grid operations-metric-grid" aria-label="Operations KPI cards">
      {operationsKpis.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </section>
  );
}

export default OperationsMetrics;
