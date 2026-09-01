import { capacityPlanning } from '../../data/operationsData.js';

function CapacityPlanning({ activeTeam }) {
  const visibleTeams = activeTeam === 'All Teams' ? capacityPlanning : capacityPlanning.filter((team) => team.team === activeTeam);

  return (
    <section className="panel" aria-labelledby="capacity-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Capacity</span>
          <h2 id="capacity-title">Team Capacity</h2>
        </div>
      </div>

      <div className="capacity-list">
        {visibleTeams.map((team) => (
          <article className="capacity-row" key={team.team}>
            <div>
              <h3>{team.team}</h3>
              <span>Backlog {team.backlog.toLocaleString()} / Available capacity {team.available}%</span>
            </div>
            <strong className={`risk-text risk-text--${team.risk.toLowerCase()}`}>{team.risk}</strong>
            <div className="capacity-bars">
              <div className="progress-track" aria-label={`${team.team} utilization ${team.utilization}%`}>
                <span style={{ width: `${team.utilization}%` }} />
              </div>
              <div className="progress-track progress-track--projected" aria-label={`${team.team} projected demand ${team.projected}%`}>
                <span style={{ width: `${team.projected}%` }} />
              </div>
            </div>
            <small>Utilization {team.utilization}% / Projected {team.projected}%</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CapacityPlanning;
