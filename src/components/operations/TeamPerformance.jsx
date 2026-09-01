import { teamPerformance, teamSorters } from '../../data/operationsData.js';

function TeamPerformance({ sortBy, onSort }) {
  const sortedTeams = [...teamPerformance].sort((a, b) => teamSorters[sortBy](b) - teamSorters[sortBy](a));

  return (
    <section className="panel revenue-table-panel" aria-labelledby="team-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Teams</span>
          <h2 id="team-title">Team Performance</h2>
        </div>
        <label className="compact-select">
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => onSort(event.target.value)}>
            {Object.keys(teamSorters).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Throughput</th>
              <th>SLA</th>
              <th>Utilization</th>
              <th>Backlog</th>
              <th>Efficiency</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team) => (
              <tr key={team.team}>
                <th scope="row">{team.team}</th>
                <td>{team.throughput.toLocaleString()}</td>
                <td>{team.sla}%</td>
                <td>{team.utilization}%</td>
                <td>{team.backlog.toLocaleString()}</td>
                <td>{team.efficiency} / 100</td>
                <td className="positive">{team.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TeamPerformance;
