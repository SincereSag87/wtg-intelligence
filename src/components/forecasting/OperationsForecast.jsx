import { operationsForecast } from '../../data/forecastingData.js';

function OperationsForecast({ onNavigate }) {
  return (
    <section className="panel" aria-labelledby="operations-forecast-title">
      <div className="panel__header"><div><span className="eyebrow">Operational Outlook</span><h2 id="operations-forecast-title">Operational Outlook</h2></div><button className="button button--secondary" type="button" onClick={() => onNavigate('operations')}>View Capacity</button></div>
      <div className="forecast-grid">{operationsForecast.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
    </section>
  );
}

export default OperationsForecast;
