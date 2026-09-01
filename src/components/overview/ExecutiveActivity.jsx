import { createElement } from 'react';
import { activities } from '../../data/overviewData.js';

function ExecutiveActivity() {
  return (
    <section className="panel" aria-labelledby="activity-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Activity</span>
          <h2 id="activity-title">Recent Executive Activity</h2>
        </div>
      </div>

      <div className="activity-feed">
        {activities.map(({ title, detail, time, Icon }) => (
          <article className="activity-item" key={`${title}-${time}`}>
            <span className="activity-icon">
              {createElement(Icon, { size: 16, 'aria-hidden': 'true' })}
            </span>
            <div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <time>{time}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExecutiveActivity;
