import { adoptionIntelligence } from '../../data/customersData.js';

function AdoptionIntelligence() {
  return (
    <section className="panel" aria-labelledby="adoption-title">
      <div className="panel__header"><div><span className="eyebrow">Adoption</span><h2 id="adoption-title">Adoption Intelligence</h2></div><span className="status-pill">AI Insights Under-Adopted</span></div>
      <div className="automation-list">
        {adoptionIntelligence.map((item) => (
          <article className="automation-row" key={item.offering}>
            <div><h3>{item.offering}</h3><span>{item.customers.toLocaleString()} active customers / {item.opportunity} expansion opportunity</span></div>
            <strong>{item.adoption}%</strong>
            <div className="progress-track" aria-label={`${item.offering}: ${item.adoption}% adoption, health relationship ${item.health}`}><span style={{ width: `${item.adoption}%` }} /></div>
            <small>Health relationship {item.health} / 100</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdoptionIntelligence;
