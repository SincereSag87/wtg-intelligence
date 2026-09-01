import { customerExperience } from '../../data/customersData.js';

function CustomerExperience() {
  return (
    <section className="panel" aria-labelledby="experience-title">
      <div className="panel__header"><div><span className="eyebrow">Experience</span><h2 id="experience-title">Customer Experience</h2></div></div>
      <div className="workload-grid experience-grid">{customerExperience.metrics.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
      <div className="health-list">
        {customerExperience.segments.map((segment) => (
          <div className="health-metric" key={segment.segment}>
            <div><span>{segment.segment}</span><strong>{segment.csat} / 5 CSAT</strong></div>
            <div className="progress-track" aria-label={`${segment.segment}: ${segment.resolution}% support resolution`}><span style={{ width: `${segment.resolution}%` }} /></div>
            <small>{segment.resolution}% support resolution</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerExperience;
