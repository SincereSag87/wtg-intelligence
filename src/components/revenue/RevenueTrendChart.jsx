import { useMemo, useState } from 'react';
import { revenueTrend } from '../../data/revenueData.js';

const width = 800;
const height = 330;
const padding = { top: 26, right: 28, bottom: 42, left: 54 };

function pathFor(points) {
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

function RevenueTrendChart({ selectedPeriod }) {
  const [activeIndex, setActiveIndex] = useState(revenueTrend.length - 1);

  const chart = useMemo(() => {
    const values = revenueTrend.flatMap((item) => [item.actual, item.forecast, item.prior]);
    const max = Math.ceil(Math.max(...values) * 10) / 10;
    const min = Math.floor(Math.min(...values) * 10) / 10 - 0.1;
    const innerWidth = width - padding.left - padding.right;
    const innerHeight = height - padding.top - padding.bottom;
    const xFor = (index) => padding.left + (index / (revenueTrend.length - 1)) * innerWidth;
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * innerHeight;

    return {
      max,
      min,
      yFor,
      xFor,
      series: {
        actual: revenueTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.actual) })),
        forecast: revenueTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.forecast) })),
        prior: revenueTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.prior) })),
      },
    };
  }, []);

  const active = revenueTrend[activeIndex];
  const gridValues = [chart.max, (chart.max + chart.min) / 2, chart.min];

  return (
    <section className="panel performance-panel revenue-trend-panel" aria-labelledby="revenue-trend-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">{selectedPeriod}</span>
          <h2 id="revenue-trend-title">Revenue Performance</h2>
        </div>
        <div className="chart-legend" aria-label="Revenue chart legend">
          <span><i className="legend-dot legend-dot--revenue" />Actual Revenue</span>
          <span><i className="legend-dot legend-dot--forecast" />Forecast</span>
          <span><i className="legend-dot legend-dot--prior" />Prior Period</span>
        </div>
      </div>

      <p className="sr-only">
        Actual revenue increased from 2.46 million in April to 2.87 million in September, running above forecast and
        ahead of the prior period.
      </p>

      <div className="chart-wrap">
        <svg className="performance-chart revenue-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="revenue-trend-title">
          <defs>
            <linearGradient id="actualRevenueFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2f7d6f" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2f7d6f" stopOpacity="0" />
            </linearGradient>
          </defs>
          {gridValues.map((value) => (
            <g key={value}>
              <line x1={padding.left} x2={width - padding.right} y1={chart.yFor(value)} y2={chart.yFor(value)} className="chart-grid" />
              <text x={padding.left - 12} y={chart.yFor(value) + 4} className="chart-axis chart-axis--y" textAnchor="end">
                ${value.toFixed(1)}M
              </text>
            </g>
          ))}
          {revenueTrend.map((item, index) => (
            <text key={item.period} x={chart.xFor(index)} y={height - 14} className="chart-axis" textAnchor="middle">
              {item.period}
            </text>
          ))}

          <path
            d={`${pathFor(chart.series.actual)} L ${chart.series.actual.at(-1).x} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`}
            fill="url(#actualRevenueFill)"
          />
          <path d={pathFor(chart.series.prior)} className="chart-line chart-line--prior" />
          <path d={pathFor(chart.series.forecast)} className="chart-line chart-line--forecast" />
          <path d={pathFor(chart.series.actual)} className="chart-line chart-line--revenue" />

          {revenueTrend.map((item, index) => (
            <g key={item.period}>
              <rect
                x={chart.xFor(index) - 30}
                y={padding.top}
                width="60"
                height={height - padding.top - padding.bottom}
                fill="transparent"
                tabIndex="0"
                role="button"
                aria-label={`${item.period}: actual revenue $${item.actual}M, forecast $${item.forecast}M, prior period $${item.prior}M`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              />
              {activeIndex === index && (
                <>
                  <line x1={chart.xFor(index)} x2={chart.xFor(index)} y1={padding.top} y2={height - padding.bottom} className="chart-hover-line" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.actual)} r="5" className="chart-point chart-point--revenue" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.forecast)} r="5" className="chart-point chart-point--forecast" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.prior)} r="5" className="chart-point chart-point--prior" />
                </>
              )}
            </g>
          ))}
        </svg>

        <div className="chart-tooltip" style={{ left: `${(activeIndex / (revenueTrend.length - 1)) * 100}%` }}>
          <strong>{active.period}</strong>
          <span>Actual ${active.actual.toFixed(2)}M</span>
          <span>Forecast ${active.forecast.toFixed(2)}M</span>
          <span>Prior ${active.prior.toFixed(2)}M</span>
        </div>
      </div>
    </section>
  );
}

export default RevenueTrendChart;
