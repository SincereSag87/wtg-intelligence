import MetricCard from '../overview/MetricCard.jsx';
import { forecastKpis } from '../../data/forecastingData.js';

function ForecastMetrics({ scenario }) {
  const projected = scenario.revenue.toFixed(2);
  const riskAdjusted = Math.max(scenario.revenue - scenario.riskExposure / 1000, 0).toFixed(2);
  const metrics = forecastKpis.map((metric) => {
    if (metric.key === 'revenue') return { ...metric, value: `$${projected}M` };
    if (metric.key === 'confidence') return { ...metric, value: `${scenario.confidence}%`, change: scenario.confidence >= 90 ? 'High' : 'Modeled' };
    if (metric.key === 'attainment') return { ...metric, value: `${((scenario.revenue / 8.75) * 100).toFixed(1)}%` };
    if (metric.key === 'margin') return { ...metric, value: `${scenario.margin}%` };
    if (metric.key === 'customerGrowth') return { ...metric, value: `+${scenario.customerGrowth}%` };
    if (metric.key === 'riskAdjusted') return { ...metric, value: `$${riskAdjusted}M` };
    return metric;
  });

  return (
    <section className="metric-grid forecast-metric-grid" aria-label="Forecast KPI cards">
      {metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
    </section>
  );
}

export default ForecastMetrics;
