import { processSorters } from '../../data/operationsData.js';

function ProcessPerformance({ processes, sortBy, onSort, onSelect }) {
  const sortedProcesses = [...processes].sort((a, b) => processSorters[sortBy](b) - processSorters[sortBy](a));

  return (
    <section className="panel revenue-table-panel process-table-panel" aria-labelledby="process-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Workflow Intelligence</span>
          <h2 id="process-title">Process Performance</h2>
        </div>
        <label className="compact-select">
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => onSort(event.target.value)}>
            {Object.keys(processSorters).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Process</th>
              <th>Volume</th>
              <th>Avg Cycle Time</th>
              <th>SLA</th>
              <th>Automation</th>
              <th>Error Rate</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {sortedProcesses.map((process) => (
              <tr key={process.process}>
                <th scope="row">
                  <button className="link-button" type="button" onClick={() => onSelect(process)}>
                    {process.process}
                  </button>
                </th>
                <td>{process.volume.toLocaleString()}</td>
                <td>{process.cycleTime} hrs</td>
                <td>{process.sla}%</td>
                <td>{process.automation}%</td>
                <td>{process.errorRate}%</td>
                <td>{process.efficiency} / 100</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sortedProcesses.length === 0 && <div className="empty-state">No processes match the current filters.</div>}
      </div>
    </section>
  );
}

export default ProcessPerformance;
