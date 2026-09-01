import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CreateScenarioDialog({ open, onClose, onCreate }) {
  const [form, setForm] = useState({ name: 'Accelerated Growth', revenueGrowth: 12, retention: 96, expansion: 18, operatingCost: 4, capacity: 8, automation: 6 });
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-scrim" type="button" aria-label="Close scenario dialog" onClick={onClose} />
      <section className="scenario-dialog" role="dialog" aria-modal="true" aria-labelledby="create-scenario-title">
        <div className="drawer-header">
          <div><span className="eyebrow">Planning Workspace</span><h2 id="create-scenario-title">Create Scenario</h2></div>
          <button ref={closeRef} className="icon-button" type="button" aria-label="Close scenario dialog" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="assumption-grid">
          <label><span>Scenario Name</span><input value={form.name} onChange={(event) => update('name', event.target.value)} /></label>
          {[
            ['Revenue Growth Assumption', 'revenueGrowth', '%'],
            ['Customer Retention', 'retention', '%'],
            ['Expansion Rate', 'expansion', '%'],
            ['Operating Cost Change', 'operatingCost', '%'],
            ['Capacity Change', 'capacity', '%'],
            ['Automation Improvement', 'automation', '%'],
          ].map(([label, key, suffix]) => (
            <label key={key}><span>{label}</span><input type="number" value={form[key]} onChange={(event) => update(key, Number(event.target.value))} /><small>{suffix}</small></label>
          ))}
        </div>
        <div className="button-row drawer-actions">
          <button className="button button--secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="button button--primary" type="button" onClick={() => onCreate(form)}>Run Scenario</button>
        </div>
      </section>
    </div>
  );
}

export default CreateScenarioDialog;
