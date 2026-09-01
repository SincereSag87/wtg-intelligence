import { useMemo, useState } from 'react';
import { performanceSeries } from '../../data/overviewData.js';

const chartWidth = 760;
const chartHeight = 320;
const padding = { top: 26, right: 26, bottom: 42, left: 52 };

function buildPath(points) {
  return points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(' ');
}

function PerformanceChart() {
  const [activeIndex, setActiveIndex] = useState(performanceSeries.length - 1);

  const chart = useMemo(() => {
    const values = performanceSeries.flatMap((item) => [item.revenue, item.cost, item.forecast]);
    const max = Math.ceil(Math.max(...values) * 10) / 10;
    const min = Math.floor(Math.min(...values) * 10) / 10 - 0.1;
    const innerWidth = chartWidth - padding.left - padding.right;
    const innerHeight = chartHeight - padding.top - padding.bottom;
    const xFor = (index) => padding.left + (index / (performanceSeries.length - 1)) * innerWidth;
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * innerHeight;

    const series = {
      revenue: performanceSeries.map((item, index) => ({ x: xFor(index), y: yFor(item.revenue) })),
      cost: performanceSeries.map((item, index) => ({ x: xFor(index), y: yFor(item.cost) })),
      forecast: performanceSeries.map((item, index) => ({ x: xFor(index), y: yFor(item.forecast) })),
    };

    return { max, min, series, xFor, yFor, innerHeight };
  }, []);

  const active = performanceSeries[activeIndex];
  const gridValues = [chart.max, (chart.max + chart.min) / 2, chart.min];

  return (
    <section className="panel performance-panel" aria-labelledby="performance-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Signature Analytics</span>
          <h2 id="performance-title">Revenue &amp; Performance</h2>
        </div>
        <div className="chart-legend" aria-label="Chart legend">
          <span><i className="legend-dot legend-dot--revenue" />Revenue</span>
          <span><i className="legend-dot legend-dot--cost" />Operating Cost</span>
          <span><i className="legend-dot legend-dot--forecast" />Forecast</span>
        </div>
      </div>

      <p className="sr-only">
        Revenue rose from 1.92 million in January to 2.84 million in October. Operating cost increased more slowly,
        and revenue is currently above forecast.
      </p>

      <div className="chart-wrap">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="performance-chart" role="img" aria-labelledby="performance-title">
          <defs>
            <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2f7d6f" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2f7d6f" stopOpacity="0" />
            </linearGradient>
          </defs>

          {gridValues.map((value) => (
            <g key={value}>
              <line x1={padding.left} x2={chartWidth - padding.right} y1={chart.yFor(value)} y2={chart.yFor(value)} className="chart-grid" />
              <text x={padding.left - 12} y={chart.yFor(value) + 4} className="chart-axis chart-axis--y" textAnchor="end">
                ${value.toFixed(1)}M
              </text>
            </g>
          ))}

          {performanceSeries.map((item, index) => (
            <text key={item.month} x={chart.xFor(index)} y={chartHeight - 14} className="chart-axis" textAnchor="middle">
              {item.month}
            </text>
          ))}

          <path
            d={`${buildPath(chart.series.revenue)} L ${chart.series.revenue.at(-1).x} ${chartHeight - padding.bottom} L ${padding.left} ${chartHeight - padding.bottom} Z`}
            fill="url(#revenueFill)"
          />
          <path d={buildPath(chart.series.forecast)} className="chart-line chart-line--forecast" />
          <path d={buildPath(chart.series.cost)} className="chart-line chart-line--cost" />
          <path d={buildPath(chart.series.revenue)} className="chart-line chart-line--revenue" />

          {performanceSeries.map((item, index) => (
            <g key={item.month}>
              <rect
                x={chart.xFor(index) - 24}
                y={padding.top}
                width="48"
                height={chart.innerHeight}
                fill="transparent"
                tabIndex="0"
                role="button"
                aria-label={`${item.month}: revenue $${item.revenue}M, operating cost $${item.cost}M, forecast $${item.forecast}M`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              />
              {activeIndex === index && (
                <>
                  <line x1={chart.xFor(index)} x2={chart.xFor(index)} y1={padding.top} y2={chartHeight - padding.bottom} className="chart-hover-line" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.revenue)} r="5" className="chart-point chart-point--revenue" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.cost)} r="5" className="chart-point chart-point--cost" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.forecast)} r="5" className="chart-point chart-point--forecast" />
                </>
              )}
            </g>
          ))}
        </svg>

        <div className="chart-tooltip" style={{ left: `${(activeIndex / (performanceSeries.length - 1)) * 100}%` }}>
          <strong>{active.month}</strong>
          <span>Revenue ${active.revenue.toFixed(2)}M</span>
          <span>Cost ${active.cost.toFixed(2)}M</span>
          <span>Forecast ${active.forecast.toFixed(2)}M</span>
        </div>
      </div>
    </section>
  );
}

export default PerformanceChart;
