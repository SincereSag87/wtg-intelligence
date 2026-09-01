import { cohortAnalysis } from '../../data/customersData.js';

function CohortAnalysis() {
  return (
    <section className="panel revenue-table-panel" aria-labelledby="cohort-title">
      <div className="panel__header"><div><span className="eyebrow">Cohorts</span><h2 id="cohort-title">Cohort Analysis</h2></div></div>
      <div className="table-wrap">
        <table className="data-table cohort-table">
          <thead><tr><th>Onboarding Quarter</th><th>Retention</th><th>Expansion</th><th>Health</th><th>Adoption</th></tr></thead>
          <tbody>{cohortAnalysis.map((row) => <tr key={row.cohort}><th scope="row">{row.cohort}</th><td>{row.retention}%</td><td>+{row.expansion}%</td><td>{row.health}</td><td>{row.adoption}%</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

export default CohortAnalysis;
