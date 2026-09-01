import { useMemo, useState } from 'react';
import { forecastTimelinePoints } from '../../data/forecastingData.js';

const width = 820;
const height = 340;
const padding = { top: 26, right: 30, bottom: 42, left: 54 };

function path(points) {
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

function ForecastChart({ scenarioName, scenario }) {
  const [activeIndex, setActiveIndex] = useState(forecastTimelinePoints.length - 1);
  const points = useMemo(() => {
    const ratio = scenario.revenue / 8.92;
    return forecastTimelinePoints.map((point, index) => {
      if (index <= 3) return point;
      return {
        ...point,
        forecast: Number((point.forecast * ratio).toFixed(2)),
        low: Number((point.low * ratio).toFixed(2)),
        high: Number((point.high * ratio).toFixed(2)),
      };
    });
  }, [scenario.revenue]);

  const chart = useMemo(() => {
    const values = points.flatMap((point) => [point.actual, point.forecast, point.target, point.low, point.high]).filter(Boolean);
    const max = Math.ceil(Math.max(...values) * 10) / 10;
    const min = Math.floor(Math.min(...values) * 10) / 10 - 0.1;
    const innerWidth = width - padding.left - padding.right;
    const innerHeight = height - padding.top - padding.bottom;
    const xFor = (index) => padding.left + (index / (points.length - 1)) * innerWidth;
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * innerHeight;
    const actual = points.map((point, index) => point.actual ? { x: xFor(index), y: yFor(point.actual) } : null).filter(Boolean);
    const forecast = points.map((point, index) => point.forecast ? { x: xFor(index), y: yFor(point.forecast) } : null).filter(Boolean);
    const target = points.map((point, index) => ({ x: xFor(index), y: yFor(point.target) }));
    const high = points.map((point, index) => point.high ? { x: xFor(index), y: yFor(point.high) } : null).filter(Boolean);
    const low = points.map((point, index) => point.low ? { x: xFor(index), y: yFor(point.low) } : null).filter(Boolean);
    return { max, min, xFor, yFor, actual, forecast, target, high, low };
  }, [points]);

  const active = points[activeIndex];
  const bandPath = `${path(chart.high)} L ${[...chart.low].reverse().map((point) => `${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' L ')} Z`;

  return (
    <section className="panel performance-panel forecast-chart-panel" aria-labelledby="forecast-chart-title">
      <div className="panel__header">
        <div><span className="eyebrow">{scenarioName}</span><h2 id="forecast-chart-title">Revenue Forecast</h2></div>
        <div className="chart-legend" aria-label="Forecast chart legend">
          <span><i className="legend-dot legend-dot--revenue" />Historical Actual</span>
          <span><i className="legend-dot legend-dot--forecasting" />Current Forecast</span>
          <span><i className="legend-dot legend-dot--target" />Target</span>
          <span><i className="legend-dot legend-dot--confidence" />Confidence Range</span>
        </div>
      </div>
      <p className="sr-only">Revenue forecast projects ${scenario.revenue.toFixed(2)}M with a range from ${scenario.range[0].toFixed(2)}M to ${scenario.range[1].toFixed(2)}M and ${scenario.confidence}% confidence.</p>
      <div className="chart-wrap">
        <svg className="performance-chart forecast-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="forecast-chart-title">
          {[chart.max, (chart.max + chart.min) / 2, chart.min].map((value) => <g key={value}><line x1={padding.left} x2={width - padding.right} y1={chart.yFor(value)} y2={chart.yFor(value)} className="chart-grid" /><text x={padding.left - 12} y={chart.yFor(value) + 4} className="chart-axis" textAnchor="end">${value.toFixed(1)}M</text></g>)}
          {points.map((point, index) => <text key={point.label} x={chart.xFor(index)} y={height - 14} className="chart-axis" textAnchor="middle">{point.label}</text>)}
          <path d={bandPath} className="confidence-band" />
          <line x1={chart.xFor(3)} x2={chart.xFor(3)} y1={padding.top} y2={height - padding.bottom} className="forecast-transition" />
          <path d={path(chart.target)} className="chart-line chart-line--target" />
          <path d={path(chart.actual)} className="chart-line chart-line--revenue" />
          <path d={path(chart.forecast)} className="chart-line chart-line--forecasting" />
          {points.map((point, index) => (
            <g key={point.label}>
              <rect x={chart.xFor(index) - 30} y={padding.top} width="60" height={height - padding.top - padding.bottom} fill="transparent" tabIndex="0" role="button" aria-label={`${point.label}: actual ${point.actual ?? 'not available'}, forecast ${point.forecast ?? 'not available'}, target ${point.target}`} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} />
              {activeIndex === index && <line x1={chart.xFor(index)} x2={chart.xFor(index)} y1={padding.top} y2={height - padding.bottom} className="chart-hover-line" />}
            </g>
          ))}
        </svg>
        <div className="chart-tooltip" style={{ left: `${(activeIndex / (points.length - 1)) * 100}%` }}>
          <strong>{active.label}</strong>
          <span>Actual {active.actual ? `$${active.actual.toFixed(2)}M` : 'Projected period'}</span>
          <span>Forecast {active.forecast ? `$${active.forecast.toFixed(2)}M` : 'Historical period'}</span>
          <span>Target ${active.target.toFixed(2)}M</span>
        </div>
      </div>
    </section>
  );
}

export default ForecastChart;
