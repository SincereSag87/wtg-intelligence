import { Activity } from 'lucide-react';
import { operationsActivity } from '../../data/operationsData.js';

function OperationsActivity() {
  return (
    <section className="panel" aria-labelledby="operations-activity-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Events</span>
          <h2 id="operations-activity-title">Operations Activity</h2>
        </div>
      </div>

      <div className="activity-feed">
        {operationsActivity.map((item) => (
          <article className="activity-item" key={`${item.title}-${item.time}`}>
            <span className="activity-icon">
              <Activity size={16} aria-hidden="true" />
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.area}</p>
              <time>{item.time}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OperationsActivity;
