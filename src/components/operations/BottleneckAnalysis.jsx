import { bottlenecks } from '../../data/operationsData.js';

function BottleneckAnalysis() {
  return (
    <section className="panel" aria-labelledby="bottlenecks-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Constraints</span>
          <h2 id="bottlenecks-title">Bottlenecks</h2>
        </div>
      </div>

      <div className="bottleneck-list">
        {bottlenecks.map((item) => (
          <article className="bottleneck-row" key={`${item.blocker}-${item.process}`}>
            <div>
              <h3>{item.blocker}</h3>
              <span>{item.process}</span>
            </div>
            <strong>{item.delay}</strong>
            <small>Affected volume {item.volume.toLocaleString()} / Trend {item.trend} / Automation potential {item.automation}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BottleneckAnalysis;
