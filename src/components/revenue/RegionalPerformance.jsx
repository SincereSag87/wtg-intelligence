import { regionalPerformance } from '../../data/revenueData.js';

function RegionalPerformance({ activeRegion }) {
  const visibleRegions = activeRegion === 'All Regions' ? regionalPerformance : regionalPerformance.filter((item) => item.region === activeRegion);
  const maxRevenue = Math.max(...regionalPerformance.map((item) => item.revenue));

  return (
    <section className="panel" aria-labelledby="regional-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Regions</span>
          <h2 id="regional-title">Revenue by Region</h2>
        </div>
      </div>

      <div className="region-list">
        {visibleRegions.map((region) => (
          <article className="region-row" key={region.region}>
            <div>
              <h3>{region.region}</h3>
              <span>{region.customers} customers</span>
            </div>
            <strong>${region.revenue.toFixed(2)}M</strong>
            <div className="region-bar" aria-label={`${region.region}: $${region.revenue.toFixed(2)}M revenue, ${region.attainment}% forecast attainment`}>
              <span style={{ width: `${(region.revenue / maxRevenue) * 100}%` }} />
            </div>
            <small>+{region.growth}% growth / {region.attainment}% forecast attainment</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RegionalPerformance;
