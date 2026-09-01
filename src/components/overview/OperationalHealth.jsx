import { Activity } from 'lucide-react';
import { operationalMetrics } from '../../data/overviewData.js';

function OperationalHealth() {
  return (
    <section className="panel" aria-labelledby="operational-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Operations</span>
          <h2 id="operational-title">Operational Health</h2>
        </div>
        <span className="health-score">
          <Activity size={16} aria-hidden="true" />
          91 / 100
        </span>
      </div>

      <div className="health-summary">
        <strong>Strong</strong>
        <span>Automation gains are offsetting risk pressure in regional retention.</span>
      </div>

      <div className="health-list">
        {operationalMetrics.map((metric) => (
          <div className="health-metric" key={metric.label}>
            <div>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
            <div className={`progress-track ${metric.risk ? 'progress-track--risk' : ''}`} aria-label={`${metric.label}: ${metric.value}, ${metric.status}`}>
              <span style={{ width: `${metric.percent}%` }} />
            </div>
            <small>{metric.status}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OperationalHealth;
