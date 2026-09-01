import { segmentPerformance } from '../../data/revenueData.js';

const sortMap = {
  Revenue: (item) => item.revenue,
  Growth: (item) => item.growth,
  Margin: (item) => item.margin,
  Retention: (item) => item.retention,
};

function SegmentPerformance({ sortBy, onSort }) {
  const sortedSegments = [...segmentPerformance].sort((a, b) => sortMap[sortBy](b) - sortMap[sortBy](a));

  return (
    <section className="panel revenue-table-panel" aria-labelledby="segment-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Segments</span>
          <h2 id="segment-title">Segment Performance</h2>
        </div>
        <label className="compact-select">
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => onSort(event.target.value)}>
            {Object.keys(sortMap).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Segment</th>
              <th>Revenue</th>
              <th>Growth</th>
              <th>ACV</th>
              <th>Retention</th>
              <th>Expansion</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            {sortedSegments.map((segment) => (
              <tr key={segment.segment}>
                <th scope="row">{segment.segment}</th>
                <td>${segment.revenue.toFixed(2)}M</td>
                <td className="positive">+{segment.growth}%</td>
                <td>{segment.acv}</td>
                <td>{segment.retention}%</td>
                <td>{segment.expansion}</td>
                <td>{segment.margin}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SegmentPerformance;
