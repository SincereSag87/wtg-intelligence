import { useState } from 'react';
import { FilePlus2, Send } from 'lucide-react';
import { reportActivity, reports as reportSeed, reportTemplates } from '../data/workspaceData.js';

function Reports() {
  const [reports, setReports] = useState(reportSeed);
  const [selected, setSelected] = useState(reportSeed[0]);
  const [createOpen, setCreateOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [draft, setDraft] = useState({ name: 'Weekly Executive Brief', type: 'Executive', range: 'Last 7 Days', areas: 'Revenue, Operations, Customers, Forecasting, AI Insights', audience: 'Executive', format: 'Executive Summary' });
  const [schedule, setSchedule] = useState({ report: 'Executive Performance', frequency: 'Weekly', recipients: 'demo.executive@example.com', time: '8:00 AM' });
  const [feedback, setFeedback] = useState('');

  const createReport = () => {
    const report = { id: `${draft.name}-${reports.length}`, title: draft.name, type: draft.type, period: draft.range, generated: 'Just now', owner: 'Raymond Wannamaker', status: 'Draft', format: draft.format, sections: draft.areas.split(',').map((item) => item.trim()), metrics: ['Demo report generated', 'Mock data only'], summary: `Prepared ${draft.format.toLowerCase()} for ${draft.audience.toLowerCase()} audience.` };
    setReports((current) => [report, ...current]);
    setSelected(report);
    setCreateOpen(false);
    setFeedback('Report generated locally.');
  };

  return (
    <div className="overview-page reports-page">
      <section className="overview-hero"><div className="hero-copy"><span className="product-kicker">WTG Intelligence</span><h1>Reports</h1><p>Create, review, and share executive-ready business intelligence.</p></div><div className="hero-controls"><button className="button button--primary" type="button" onClick={() => setCreateOpen(true)}><FilePlus2 size={17} aria-hidden="true" />Create Report</button><button className="button button--secondary" type="button" onClick={() => setScheduleOpen(true)}><Send size={17} aria-hidden="true" />Schedule Report</button></div></section>
      <div className="inline-status" aria-live="polite">{feedback || 'Reports Generated 48 / Scheduled 6 / Shared 14 / Executive Briefs 12 / Last Generated 18 min ago'}</div>
      <section className="metric-grid"><article className="metric-card"><h3>Reports Generated</h3><strong>48</strong><p>this quarter</p></article><article className="metric-card"><h3>Scheduled</h3><strong>6</strong><p>active schedules</p></article><article className="metric-card"><h3>Shared</h3><strong>14</strong><p>executive sends</p></article><article className="metric-card"><h3>Executive Briefs</h3><strong>12</strong><p>AI-assisted summaries</p></article><article className="metric-card"><h3>Last Generated</h3><strong>18 min</strong><p>ago</p></article></section>
      <div className="dashboard-grid operations-analysis-grid">
        <section className="panel"><div className="panel__header"><div><span className="eyebrow">Library</span><h2>Report Library</h2></div></div><div className="report-card-grid">{reports.map((report) => <article className={`report-card ${selected.id === report.id ? 'is-selected' : ''}`} key={report.id}><button type="button" onClick={() => setSelected(report)}><strong>{report.title}</strong><span>{report.type} / {report.period}</span><small>{report.owner} / {report.status} / {report.format}</small></button><div className="report-actions">{['View', 'Regenerate', 'Duplicate', 'Export'].map((action) => <button type="button" key={action} onClick={() => { if (action === 'View') setSelected(report); if (action === 'Duplicate') setReports((current) => [{ ...report, id: `${report.id}-copy-${current.length}`, title: `${report.title} Copy`, status: 'Draft' }, ...current]); setFeedback(`${action} action prepared for ${report.title}.`); }}>{action}</button>)}</div></article>)}</div></section>
        <section className="panel risk-detail-panel"><div className="panel__header"><div><span className="eyebrow">Preview</span><h2>{selected.title}</h2></div><span className="status-pill">{selected.status}</span></div><div className="drawer-metrics"><div><span>Period</span><strong>{selected.period}</strong></div><div><span>Generated</span><strong>{selected.generated}</strong></div><div><span>Owner</span><strong>{selected.owner}</strong></div><div><span>Format</span><strong>{selected.format}</strong></div></div><div className="brief-list"><strong>Sections included</strong><ul>{selected.sections.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="brief-list"><strong>Key metrics</strong><ul>{selected.metrics.map((item) => <li key={item}>{item}</li>)}</ul></div><p>{selected.summary}</p></section>
      </div>
      <div className="dashboard-grid operations-analysis-grid">
        <section className="panel"><div className="panel__header"><div><span className="eyebrow">Templates</span><h2>Templates</h2></div></div><div className="saved-question-list">{reportTemplates.map((template) => <button type="button" key={template} onClick={() => { setDraft((current) => ({ ...current, name: template })); setCreateOpen(true); }}>{template}</button>)}</div></section>
        <section className="panel"><div className="panel__header"><div><span className="eyebrow">Activity</span><h2>Report Activity</h2></div></div><div className="activity-feed">{reportActivity.map((item) => <article className="activity-item" key={item.title}><span className="activity-icon">BI</span><div><h3>{item.title}</h3><p>{item.detail}</p><time>{item.time}</time></div></article>)}</div></section>
      </div>
      {createOpen && <div className="drawer-layer"><button className="drawer-scrim" type="button" aria-label="Close create report" onClick={() => setCreateOpen(false)} /><section className="scenario-dialog" role="dialog" aria-modal="true" aria-labelledby="create-report-title"><div className="drawer-header"><div><span className="eyebrow">Report Builder</span><h2 id="create-report-title">Create Report</h2></div></div><div className="assumption-grid">{[['Report Name','name'],['Report Type','type'],['Date Range','range'],['Business Areas','areas'],['Audience','audience'],['Format','format']].map(([label,key]) => <label key={key}><span>{label}</span><input value={draft[key]} onChange={(event) => setDraft((current) => ({ ...current, [key]: event.target.value }))} /></label>)}</div><div className="button-row drawer-actions"><button className="button button--secondary" type="button" onClick={() => setCreateOpen(false)}>Cancel</button><button className="button button--primary" type="button" onClick={createReport}>Generate Report</button></div></section></div>}
      {scheduleOpen && <div className="drawer-layer"><button className="drawer-scrim" type="button" aria-label="Close schedule report" onClick={() => setScheduleOpen(false)} /><section className="scenario-dialog" role="dialog" aria-modal="true" aria-labelledby="schedule-report-title"><div className="drawer-header"><div><span className="eyebrow">Schedule</span><h2 id="schedule-report-title">Schedule Report</h2></div></div><div className="assumption-grid">{[['Report','report'],['Frequency','frequency'],['Recipients','recipients'],['Delivery Time','time']].map(([label,key]) => <label key={key}><span>{label}</span><input value={schedule[key]} onChange={(event) => setSchedule((current) => ({ ...current, [key]: event.target.value }))} /></label>)}</div><div className="button-row drawer-actions"><button className="button button--secondary" type="button" onClick={() => setScheduleOpen(false)}>Cancel</button><button className="button button--primary" type="button" onClick={() => { setScheduleOpen(false); setFeedback('Report scheduled locally. No delivery was sent.'); }}>Schedule Report</button></div></section></div>}
    </div>
  );
}

export default Reports;
