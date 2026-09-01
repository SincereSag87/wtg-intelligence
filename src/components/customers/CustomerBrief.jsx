function CustomerBrief({ customer, onAction }) {
  return (
    <section className="drawer-section customer-brief" aria-labelledby="customer-brief-title">
      <h3 id="customer-brief-title">AI Customer Brief</h3>
      <p>{customer.customer} remains a {customer.health.toLowerCase()} {customer.segment.toLowerCase()} account with {customer.retentionRisk.toLowerCase()} retention risk and an estimated expansion opportunity of ${Math.round(customer.expansionPotential / 1000)}K.</p>
      <strong>Key observations:</strong>
      <ul className="drawer-list">
        <li>usage increased 14% over the last 60 days</li>
        <li>support volume decreased 18% for healthy accounts</li>
        <li>two services remain under-adopted</li>
        <li>renewal likelihood remains {customer.retentionRisk === 'High' ? 'uncertain' : 'high'}</li>
      </ul>
      <div className="brief-next-step"><span>Recommended next action</span><p>Schedule an expansion review before Q4 planning.</p></div>
      <div className="button-row drawer-actions">
        <button className="button button--secondary" type="button" onClick={() => onAction(`Follow-up queued for ${customer.customer}.`)}>Ask Follow-up</button>
        <button className="button button--primary" type="button" onClick={() => onAction(`Account brief generated for ${customer.customer}.`)}>Generate Brief</button>
      </div>
    </section>
  );
}

export default CustomerBrief;
