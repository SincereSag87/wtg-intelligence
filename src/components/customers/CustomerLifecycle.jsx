import { lifecycleAnalytics } from '../../data/customersData.js';

function CustomerLifecycle() {
  const maxAccounts = Math.max(...lifecycleAnalytics.map((item) => item.accounts));
  return (
    <section className="panel" aria-labelledby="lifecycle-title">
      <div className="panel__header"><div><span className="eyebrow">Lifecycle</span><h2 id="lifecycle-title">Customer Lifecycle</h2></div></div>
      <div className="lifecycle-flow" aria-label="Customer lifecycle funnel">
        {lifecycleAnalytics.map((stage) => (
          <article className="lifecycle-stage" key={stage.stage} style={{ '--stage-width': `${(stage.accounts / maxAccounts) * 100}%` }}>
            <div><h3>{stage.stage}</h3><strong>{stage.accounts}</strong></div>
            <span>{stage.revenue}</span>
            <div className="progress-track"><span style={{ width: `${stage.conversion}%` }} /></div>
            <small>Health {stage.health} / {stage.days} days / {stage.conversion}% conversion</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomerLifecycle;
