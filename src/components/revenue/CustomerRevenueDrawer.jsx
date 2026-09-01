import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

function formatCurrency(value) {
  return `$${Math.round(value / 1000)}K`;
}

function CustomerRevenueDrawer({ customer, onClose, onAction }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!customer) return undefined;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [customer, onClose]);

  if (!customer) return null;

  const maxTrend = Math.max(...customer.trend);

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-scrim" type="button" aria-label="Close customer details" onClick={onClose} />
      <aside className="customer-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div className="drawer-header">
          <div>
            <span className="eyebrow">Customer Overview</span>
            <h2 id="drawer-title">{customer.customer}</h2>
          </div>
          <button ref={closeButtonRef} className="icon-button" type="button" aria-label="Close customer drawer" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="drawer-metrics">
          <div><span>Revenue</span><strong>{formatCurrency(customer.revenue)}</strong></div>
          <div><span>YoY Growth</span><strong>+{customer.growth}%</strong></div>
          <div><span>Contract Value</span><strong>{formatCurrency(customer.contractValue)}</strong></div>
          <div><span>Expansion</span><strong>{formatCurrency(customer.expansion)}</strong></div>
          <div><span>Segment</span><strong>{customer.segment}</strong></div>
          <div><span>Region</span><strong>{customer.region}</strong></div>
          <div><span>Health</span><strong>{customer.health}</strong></div>
          <div><span>Renewal</span><strong>{customer.renewalDate}</strong></div>
        </div>

        <section className="drawer-section" aria-labelledby="drawer-trend">
          <h3 id="drawer-trend">Monthly Revenue Trend</h3>
          <div className="mini-bars" aria-label="Monthly revenue trend">
            {customer.trend.map((value, index) => (
              <span key={`${value}-${index}`} style={{ height: `${(value / maxTrend) * 100}%` }} title={`Month ${index + 1}: ${value}K`} />
            ))}
          </div>
        </section>

        <section className="drawer-section" aria-labelledby="drawer-mix">
          <h3 id="drawer-mix">Product / Service Mix</h3>
          <div className="distribution">
            {customer.mix.map((item) => (
              <div key={item.label}>
                <div><span>{item.label}</span><strong>{item.value}%</strong></div>
                <div className="progress-track"><span style={{ width: `${item.value}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="drawer-section" aria-labelledby="drawer-opportunities">
          <h3 id="drawer-opportunities">Expansion Opportunities</h3>
          <ul className="drawer-list">
            {customer.opportunities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="drawer-section" aria-labelledby="drawer-activity">
          <h3 id="drawer-activity">Recent Account Activity</h3>
          <ul className="drawer-list">
            {customer.activity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="button-row drawer-actions">
          <button className="button button--primary" type="button" onClick={() => onAction(`Opening customer intelligence for ${customer.customer}.`)}>
            View Customer Intelligence
          </button>
          <button className="button button--secondary" type="button" onClick={() => onAction(`Account brief generated for ${customer.customer}.`)}>
            Generate Account Brief
          </button>
        </div>
      </aside>
    </div>
  );
}

export default CustomerRevenueDrawer;
