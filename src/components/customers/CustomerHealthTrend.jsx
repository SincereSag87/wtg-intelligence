import { useMemo, useState } from 'react';
import { healthTrend } from '../../data/customersData.js';

const width = 760;
const height = 300;
const padding = { top: 22, right: 28, bottom: 40, left: 48 };

function makePath(points) {
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

function CustomerHealthTrend() {
  const [activeIndex, setActiveIndex] = useState(healthTrend.length - 1);
  const chart = useMemo(() => {
    const min = 0;
    const max = 80;
    const innerWidth = width - padding.left - padding.right;
    const innerHeight = height - padding.top - padding.bottom;
    const xFor = (index) => padding.left + (index / (healthTrend.length - 1)) * innerWidth;
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * innerHeight;
    return {
      xFor,
      yFor,
      series: {
        healthy: healthTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.healthy) })),
        watch: healthTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.watch) })),
        risk: healthTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.risk) })),
      },
    };
  }, []);
  const active = healthTrend[activeIndex];

  return (
    <section className="panel performance-panel" aria-labelledby="health-trend-title">
      <div className="panel__header">
        <div><span className="eyebrow">Health Movement</span><h2 id="health-trend-title">Customer Health Trend</h2></div>
        <div className="chart-legend" aria-label="Customer health chart legend">
          <span><i className="legend-dot legend-dot--customer" />Healthy</span>
          <span><i className="legend-dot legend-dot--watch" />Watch</span>
          <span><i className="legend-dot legend-dot--risk" />At Risk</span>
        </div>
      </div>
      <p className="sr-only">Healthy accounts increased to 74 percent while at-risk accounts decreased to 7 percent.</p>
      <div className="chart-wrap">
        <svg className="performance-chart customer-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="health-trend-title">
          {[80, 60, 40, 20, 0].map((value) => (
            <g key={value}>
              <line x1={padding.left} x2={width - padding.right} y1={chart.yFor(value)} y2={chart.yFor(value)} className="chart-grid" />
              <text x={padding.left - 10} y={chart.yFor(value) + 4} className="chart-axis" textAnchor="end">{value}%</text>
            </g>
          ))}
          {healthTrend.map((item, index) => (
            <text key={item.period} x={chart.xFor(index)} y={height - 14} className="chart-axis" textAnchor="middle">{item.period}</text>
          ))}
          <path d={makePath(chart.series.healthy)} className="chart-line chart-line--customer" />
          <path d={makePath(chart.series.watch)} className="chart-line chart-line--watch" />
          <path d={makePath(chart.series.risk)} className="chart-line chart-line--risk" />
          {healthTrend.map((item, index) => (
            <g key={item.period}>
              <rect x={chart.xFor(index) - 30} y={padding.top} width="60" height={height - padding.top - padding.bottom} fill="transparent" tabIndex="0" role="button" aria-label={`${item.period}: ${item.healthy}% healthy, ${item.watch}% watch, ${item.risk}% at risk`} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} />
              {activeIndex === index && (
                <>
                  <line x1={chart.xFor(index)} x2={chart.xFor(index)} y1={padding.top} y2={height - padding.bottom} className="chart-hover-line" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.healthy)} r="5" className="chart-point chart-point--customer" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.watch)} r="5" className="chart-point chart-point--watch" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.risk)} r="5" className="chart-point chart-point--risk" />
                </>
              )}
            </g>
          ))}
        </svg>
        <div className="chart-tooltip" style={{ left: `${(activeIndex / (healthTrend.length - 1)) * 100}%` }}>
          <strong>{active.period}</strong>
          <span>Healthy {active.healthy}%</span>
          <span>Watch {active.watch}%</span>
          <span>At Risk {active.risk}%</span>
        </div>
      </div>
    </section>
  );
}

export default CustomerHealthTrend;
