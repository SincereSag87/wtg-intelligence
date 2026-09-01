function ForecastDrivers({ drivers, selectedDriver, onSelect }) {
  return (
    <section className="panel" aria-labelledby="drivers-title">
      <div className="panel__header"><div><span className="eyebrow">Variance Intelligence</span><h2 id="drivers-title">Forecast Drivers</h2></div></div>
      <div className="forecast-driver-list">
        {drivers.map((driver) => (
          <button className={`forecast-driver ${selectedDriver?.id === driver.id ? 'is-selected' : ''} ${driver.category === 'Negative' ? 'is-negative' : ''}`} type="button" key={driver.id} onClick={() => onSelect(driver)} aria-pressed={selectedDriver?.id === driver.id}>
            <div><strong>{driver.label}</strong><span>{driver.category} / {driver.area}</span></div>
            <b>{driver.impact > 0 ? '+' : '-'}${Math.abs(driver.impact)}K</b>
            <small>{driver.confidence}% confidence / {driver.trend}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ForecastDrivers;
