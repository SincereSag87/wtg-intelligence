import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import CustomerBrief from './CustomerBrief.jsx';

function money(value) {
  return `$${Math.round(value / 1000)}K`;
}

function CustomerDetailDrawer({ customer, onClose, onAction, onNavigate }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!customer) return undefined;
    closeRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [customer, onClose]);

  if (!customer) return null;
  const maxRevenue = Math.max(...customer.trend);
  const maxEngagement = Math.max(...customer.engagement);

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-scrim" type="button" aria-label="Close customer details" onClick={onClose} />
      <aside className="customer-drawer" role="dialog" aria-modal="true" aria-labelledby="customer-drawer-title">
        <div className="drawer-header">
          <div><span className="eyebrow">Customer</span><h2 id="customer-drawer-title">{customer.customer}</h2></div>
          <button ref={closeRef} className="icon-button" type="button" aria-label="Close customer drawer" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="drawer-metrics">
          <div><span>Segment</span><strong>{customer.segment}</strong></div><div><span>Region</span><strong>{customer.region}</strong></div>
          <div><span>Annual Revenue</span><strong>{money(customer.revenue)}</strong></div><div><span>Health</span><strong>{customer.health}</strong></div>
          <div><span>Health Score</span><strong>{customer.healthScore}</strong></div><div><span>Retention Risk</span><strong>{customer.retentionRisk}</strong></div>
          <div><span>Expansion Potential</span><strong>{money(customer.expansionPotential)}</strong></div><div><span>Renewal</span><strong>{customer.renewal}</strong></div>
          <div><span>Lifecycle</span><strong>{customer.lifecycle}</strong></div><div><span>Owner</span><strong>{customer.owner}</strong></div>
        </div>
        <section className="drawer-section"><h3>Monthly Revenue Trend</h3><div className="mini-bars">{customer.trend.map((value, index) => <span key={`${value}-${index}`} style={{ height: `${(value / maxRevenue) * 100}%` }} title={`Month ${index + 1}: ${value}K`} />)}</div></section>
        <section className="drawer-section"><h3>Engagement Trend</h3><div className="mini-bars customer-engagement-bars">{customer.engagement.map((value, index) => <span key={`${value}-${index}`} style={{ height: `${(value / maxEngagement) * 100}%` }} title={`Month ${index + 1}: ${value}`} />)}</div></section>
        <section className="drawer-section"><h3>Product / Service Adoption</h3><div className="distribution">{customer.adoption.map((item) => <div key={item.label}><div><span>{item.label}</span><strong>{item.value}%</strong></div><div className="progress-track"><span style={{ width: `${item.value}%` }} /></div></div>)}</div></section>
        <section className="drawer-section"><h3>Support Activity</h3><div className="drawer-metrics support-metrics">{Object.entries(customer.support).map(([key, value]) => <div key={key}><span>{key.replace(/([A-Z])/g, ' $1')}</span><strong>{value}</strong></div>)}</div></section>
        <section className="drawer-section"><h3>Relationship Timeline</h3><ul className="drawer-list">{customer.timeline.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="drawer-section"><h3>Expansion Opportunities</h3><ul className="drawer-list">{customer.opportunities.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="drawer-section"><h3>Risk Signals</h3><ul className="drawer-list">{customer.risks.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <CustomerBrief customer={customer} onAction={onAction} />
        <div className="button-row drawer-actions">
          <button className="button button--primary" type="button" onClick={() => onAction(`Account brief generated for ${customer.customer}.`)}>Generate Account Brief</button>
          <button className="button button--secondary" type="button" onClick={() => onNavigate('revenue')}>View Revenue Impact</button>
          <button className="button button--secondary" type="button" onClick={() => onAction(`Opening risk signals for ${customer.customer}.`)}>View Risk Signals</button>
        </div>
      </aside>
    </div>
  );
}

export default CustomerDetailDrawer;
