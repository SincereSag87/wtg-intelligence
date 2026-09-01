import { marginAnalysis } from '../../data/revenueData.js';

function MarginAnalysis() {
  const maxTrend = Math.max(...marginAnalysis.trend.map((item) => item.margin));

  return (
    <section className="panel" aria-labelledby="margin-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Profitability</span>
          <h2 id="margin-title">Margin Analysis</h2>
        </div>
      </div>

      <div className="margin-highlights">
        <div><span>Highest Margin</span><strong>Software</strong></div>
        <div><span>Largest Improvement</span><strong>Managed Services</strong></div>
      </div>

      <div className="mini-bars margin-trend" aria-label="Gross margin trend">
        {marginAnalysis.trend.map((item) => (
          <span key={item.period} style={{ height: `${(item.margin / maxTrend) * 100}%` }} title={`${item.period}: ${item.margin}%`} />
        ))}
      </div>

      <div className="margin-columns">
        <div>
          <h3>By Business Unit</h3>
          {marginAnalysis.byUnit.map((item) => (
            <div className="margin-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
              <div className="progress-track"><span style={{ width: `${item.value}%` }} /></div>
            </div>
          ))}
        </div>
        <div>
          <h3>By Segment</h3>
          {marginAnalysis.bySegment.map((item) => (
            <div className="margin-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
              <div className="progress-track"><span style={{ width: `${item.value}%` }} /></div>
            </div>
          ))}
        </div>
        <div>
          <h3>Cost Contribution</h3>
          {marginAnalysis.costContribution.map((item) => (
            <div className="margin-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
              <div className="progress-track progress-track--cost"><span style={{ width: `${item.value}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarginAnalysis;
