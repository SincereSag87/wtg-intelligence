import { targetPacing } from '../../data/forecastingData.js';

function TargetPacing() {
  return (
    <section className="panel forecast-panel" aria-labelledby="target-pacing-title">
      <div className="panel__header"><div><span className="eyebrow">Target Pacing</span><h2 id="target-pacing-title">Target Pacing</h2></div><span className="status-pill">{targetPacing.pacing}</span></div>
      <div className="forecast-grid">
        <div><span>Quarter Target</span><strong>${targetPacing.target.toFixed(2)}M</strong></div>
        <div><span>Revenue to Date</span><strong>${targetPacing.toDate.toFixed(2)}M</strong></div>
        <div><span>Expected Remaining</span><strong>${targetPacing.remaining.toFixed(2)}M</strong></div>
        <div><span>Projected Finish</span><strong>${targetPacing.finish.toFixed(2)}M</strong></div>
      </div>
      <div className="pacing-visual" aria-label="Target line, actual progress, expected path, and projected finish">
        <span className="pacing-visual__target" />
        <span className="pacing-visual__actual" />
        <span className="pacing-visual__expected" />
        <span className="pacing-visual__finish" />
      </div>
      <div className="margin-highlights">
        <div><span>Required Run Rate</span><strong>{targetPacing.requiredRunRate}</strong></div>
        <div><span>Projected Run Rate</span><strong>{targetPacing.projectedRunRate}</strong></div>
      </div>
    </section>
  );
}

export default TargetPacing;
