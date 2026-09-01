import { Activity } from 'lucide-react';
import { customerActivity } from '../../data/customersData.js';

function CustomerActivity() {
  return (
    <section className="panel" aria-labelledby="customer-activity-title">
      <div className="panel__header"><div><span className="eyebrow">Activity</span><h2 id="customer-activity-title">Customer Activity</h2></div></div>
      <div className="activity-feed">{customerActivity.map((item) => <article className="activity-item" key={`${item.title}-${item.time}`}><span className="activity-icon"><Activity size={16} aria-hidden="true" /></span><div><h3>{item.title}</h3><p>{item.customer}</p><time>{item.time}</time></div></article>)}</div>
    </section>
  );
}

export default CustomerActivity;
