import { useMemo, useState } from 'react';
import { efficiencyTrend } from '../../data/operationsData.js';

const width = 800;
const height = 330;
const padding = { top: 26, right: 28, bottom: 42, left: 54 };

function linePath(points) {
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

function EfficiencyTrend({ selectedPeriod }) {
  const [activeIndex, setActiveIndex] = useState(efficiencyTrend.length - 1);

  const chart = useMemo(() => {
    const min = 68;
    const max = 100;
    const innerWidth = width - padding.left - padding.right;
    const innerHeight = height - padding.top - padding.bottom;
    const xFor = (index) => padding.left + (index / (efficiencyTrend.length - 1)) * innerWidth;
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * innerHeight;

    return {
      yFor,
      xFor,
      series: {
        efficiency: efficiencyTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.efficiency) })),
        sla: efficiencyTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.sla) })),
        automation: efficiencyTrend.map((point, index) => ({ x: xFor(index), y: yFor(point.automation) })),
      },
    };
  }, []);

  const active = efficiencyTrend[activeIndex];
  const gridValues = [100, 90, 80, 70];

  return (
    <section className="panel performance-panel operations-trend-panel" aria-labelledby="efficiency-trend-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">{selectedPeriod}</span>
          <h2 id="efficiency-trend-title">Operational Efficiency</h2>
        </div>
        <div className="chart-legend" aria-label="Operations chart legend">
          <span><i className="legend-dot legend-dot--operations" />Efficiency Score</span>
          <span><i className="legend-dot legend-dot--forecast" />SLA Attainment</span>
          <span><i className="legend-dot legend-dot--automation" />Automation Coverage</span>
        </div>
      </div>

      <p className="sr-only">
        Efficiency increased from 88.2 to 92.7, SLA attainment increased to 96.4, and automation coverage increased to
        78.2 over the selected period.
      </p>

      <div className="chart-wrap">
        <svg className="performance-chart operations-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="efficiency-trend-title">
          {gridValues.map((value) => (
            <g key={value}>
              <line x1={padding.left} x2={width - padding.right} y1={chart.yFor(value)} y2={chart.yFor(value)} className="chart-grid" />
              <text x={padding.left - 12} y={chart.yFor(value) + 4} className="chart-axis chart-axis--y" textAnchor="end">
                {value}%
              </text>
            </g>
          ))}
          {efficiencyTrend.map((item, index) => (
            <text key={item.period} x={chart.xFor(index)} y={height - 14} className="chart-axis" textAnchor="middle">
              {item.period}
            </text>
          ))}

          <path d={linePath(chart.series.automation)} className="chart-line chart-line--automation" />
          <path d={linePath(chart.series.sla)} className="chart-line chart-line--forecast" />
          <path d={linePath(chart.series.efficiency)} className="chart-line chart-line--operations" />

          {efficiencyTrend.map((item, index) => (
            <g key={item.period}>
              <rect
                x={chart.xFor(index) - 30}
                y={padding.top}
                width="60"
                height={height - padding.top - padding.bottom}
                fill="transparent"
                tabIndex="0"
                role="button"
                aria-label={`${item.period}: efficiency ${item.efficiency}%, SLA ${item.sla}%, automation ${item.automation}%`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              />
              {activeIndex === index && (
                <>
                  <line x1={chart.xFor(index)} x2={chart.xFor(index)} y1={padding.top} y2={height - padding.bottom} className="chart-hover-line" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.efficiency)} r="5" className="chart-point chart-point--operations" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.sla)} r="5" className="chart-point chart-point--forecast" />
                  <circle cx={chart.xFor(index)} cy={chart.yFor(item.automation)} r="5" className="chart-point chart-point--automation" />
                </>
              )}
            </g>
          ))}
        </svg>
        <div className="chart-tooltip" style={{ left: `${(activeIndex / (efficiencyTrend.length - 1)) * 100}%` }}>
          <strong>{active.period}</strong>
          <span>Efficiency {active.efficiency}%</span>
          <span>SLA {active.sla}%</span>
          <span>Automation {active.automation}%</span>
        </div>
      </div>
    </section>
  );
}

export default EfficiencyTrend;
