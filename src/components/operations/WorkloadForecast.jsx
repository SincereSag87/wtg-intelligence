import { workloadForecast } from '../../data/operationsData.js';

function WorkloadForecast() {
  return (
    <section className="panel forecast-panel" aria-labelledby="workload-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Demand Planning</span>
          <h2 id="workload-title">Workload Forecast</h2>
        </div>
      </div>

      <div className="workload-grid">
        {[
          ['Expected Tasks', workloadForecast.next30.expectedTasks.toLocaleString()],
          ['Peak Day', workloadForecast.next30.peakDay],
          ['Projected Capacity Gap', workloadForecast.next30.capacityGap],
          ['Automation Offset', workloadForecast.next30.automationOffset],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="forecast-band operations-forecast-band" aria-label="Workload forecast for next 7 days and next 30 days">
        <span className="forecast-band__range" />
        <span className="forecast-band__target" />
        <span className="forecast-band__actual" />
        <span className="forecast-band__projected" />
      </div>

      <div className="forecast-grid">
        <div><span>Next 7 Days</span><strong>{workloadForecast.next7.expectedTasks.toLocaleString()} tasks</strong></div>
        <div><span>Next 30 Days</span><strong>{workloadForecast.next30.expectedTasks.toLocaleString()} tasks</strong></div>
      </div>
    </section>
  );
}

export default WorkloadForecast;
