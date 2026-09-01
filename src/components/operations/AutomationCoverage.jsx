import { automationCoverage } from '../../data/operationsData.js';

function AutomationCoverage() {
  return (
    <section className="panel" aria-labelledby="automation-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Automation</span>
          <h2 id="automation-title">Automation Coverage</h2>
        </div>
        <span className="health-score">78.2% Overall</span>
      </div>

      <div className="margin-highlights">
        <div><span>Highest Coverage</span><strong>Security Triage</strong></div>
        <div><span>Largest Opportunity</span><strong>Customer Onboarding</strong></div>
      </div>

      <div className="automation-list">
        {automationCoverage.map((item) => (
          <article className="automation-row" key={item.process}>
            <div>
              <h3>{item.process}</h3>
              <span>Potential automation upside {item.upside}</span>
            </div>
            <strong>{item.automated}%</strong>
            <div className="automation-stack" aria-label={`${item.process}: ${item.automated}% automated, ${item.manual}% manual, ${item.review}% human review`}>
              <span className="automation-stack__automated" style={{ width: `${item.automated}%` }} />
              <span className="automation-stack__manual" style={{ width: `${item.manual}%` }} />
              <span className="automation-stack__review" style={{ width: `${item.review}%` }} />
            </div>
            <small>Automated / Manual / Human review steps</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AutomationCoverage;
