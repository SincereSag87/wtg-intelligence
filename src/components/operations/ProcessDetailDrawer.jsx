import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

function ProcessDetailDrawer({ process, onClose, onAction, onNavigateRevenue }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!process) return undefined;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [process, onClose]);

  if (!process) return null;

  const maxTrend = Math.max(...process.trend);

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-scrim" type="button" aria-label="Close process details" onClick={onClose} />
      <aside className="customer-drawer operations-drawer" role="dialog" aria-modal="true" aria-labelledby="process-drawer-title">
        <div className="drawer-header">
          <div>
            <span className="eyebrow">Process Overview</span>
            <h2 id="process-drawer-title">{process.process}</h2>
          </div>
          <button ref={closeButtonRef} className="icon-button" type="button" aria-label="Close process drawer" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="drawer-metrics">
          <div><span>Volume</span><strong>{process.volume.toLocaleString()}</strong></div>
          <div><span>Avg Cycle Time</span><strong>{process.cycleTime} hrs</strong></div>
          <div><span>SLA</span><strong>{process.sla}%</strong></div>
          <div><span>Automation</span><strong>{process.automation}%</strong></div>
          <div><span>Error Rate</span><strong>{process.errorRate}%</strong></div>
          <div><span>Efficiency</span><strong>{process.efficiency} / 100</strong></div>
        </div>

        <section className="drawer-section" aria-labelledby="cycle-trend-title">
          <h3 id="cycle-trend-title">Cycle-Time Trend</h3>
          <div className="mini-bars operations-mini-bars" aria-label="Cycle time trend">
            {process.trend.map((value, index) => (
              <span key={`${value}-${index}`} style={{ height: `${(value / maxTrend) * 100}%` }} title={`Period ${index + 1}: ${value} hours`} />
            ))}
          </div>
        </section>

        <section className="drawer-section" aria-labelledby="step-breakdown-title">
          <h3 id="step-breakdown-title">Step Breakdown</h3>
          <div className="distribution">
            {process.steps.map((step) => (
              <div key={step.label}>
                <div><span>{step.label}</span><strong>{step.percent}%</strong></div>
                <div className="progress-track"><span style={{ width: `${step.percent}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        {[
          ['Bottlenecks', process.bottlenecks],
          ['Automation Opportunities', process.opportunities],
          ['Recent Incidents', process.incidents],
          ['Recommended Improvements', process.improvements],
        ].map(([title, items]) => (
          <section className="drawer-section" aria-labelledby={`${title.replaceAll(' ', '-').toLowerCase()}-title`} key={title}>
            <h3 id={`${title.replaceAll(' ', '-').toLowerCase()}-title`}>{title}</h3>
            <ul className="drawer-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <div className="button-row drawer-actions">
          <button className="button button--primary" type="button" onClick={() => onAction(`${process.process} workflow view is planned for a future phase.`)}>
            Explore Workflow
          </button>
          <button className="button button--secondary" type="button" onClick={() => onAction(`Process brief generated for ${process.process}.`)}>
            Generate Process Brief
          </button>
          <button className="button button--secondary" type="button" onClick={onNavigateRevenue}>
            View Revenue Impact
          </button>
        </div>
      </aside>
    </div>
  );
}

export default ProcessDetailDrawer;
