import { customerForecast } from '../../data/forecastingData.js';

function CustomerForecast({ onNavigate }) {
  return (
    <section className="panel" aria-labelledby="customer-forecast-title">
      <div className="panel__header"><div><span className="eyebrow">Customer Outlook</span><h2 id="customer-forecast-title">Customer Outlook</h2></div><button className="button button--secondary" type="button" onClick={() => onNavigate('customers')}>View Customers</button></div>
      <div className="forecast-grid">{customerForecast.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
    </section>
  );
}

export default CustomerForecast;
