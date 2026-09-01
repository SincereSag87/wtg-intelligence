import { Brain, FileText, Plus, Save } from 'lucide-react';
import { useMemo, useState } from 'react';
import { decisionLogSeed, insights, recommendations, savedQuestions } from '../../data/workspaceData.js';

const ranges = ['Today', 'Last 7 Days', 'Last 30 Days', 'Quarter'];
const areas = ['All', 'Revenue', 'Operations', 'Customers', 'Forecasting'];
const priorities = ['All', 'Critical', 'High', 'Medium', 'Low'];

function answerFor(question) {
  const text = question.toLowerCase();
  if (text.includes('risk')) return 'Customer Operations capacity and two renewal accounts represent the highest near-term risk.';
  if (text.includes('expansion')) return 'Enterprise expansion is strongest at Northstar Logistics, Vertex Financial, and Western region enterprise accounts.';
  if (text.includes('forecast')) return 'Forecast confidence improved as retention stabilized and pipeline reliability increased.';
  return 'Leadership should focus on enterprise expansion, operations automation, and retention planning this week.';
}

function InsightWorkspace({ onNavigate }) {
  const [filters, setFilters] = useState({ range: 'Last 30 Days', area: 'All', priority: 'All' });
  const [selected, setSelected] = useState(insights[0]);
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState(savedQuestions);
  const [response, setResponse] = useState('');
  const [brief, setBrief] = useState(false);
  const [decisions, setDecisions] = useState(decisionLogSeed);
  const [statusFilter, setStatusFilter] = useState('All');
  const [feedback, setFeedback] = useState('');

  const visibleInsights = useMemo(() => insights.filter((item) => (filters.area === 'All' || item.area === filters.area) && (filters.priority === 'All' || item.priority === filters.priority)), [filters]);
  const visibleDecisions = decisions.filter((item) => statusFilter === 'All' || item.decision === statusFilter);

  const ask = (text = question) => {
    if (!text.trim()) return;
    setResponse(answerFor(text));
    setFeedback(`Intelligence response prepared for: ${text}`);
  };

  const addDecision = (item) => {
    setDecisions((current) => [{ id: `${item.title}-${current.length}`, title: item.title, decision: 'In Review', owner: item.owner, impact: item.impact, area: item.area, date: 'Sep 1, 2026' }, ...current]);
    setFeedback(`${item.title} added to decision log.`);
  };

  return (
    <div className="overview-page insights-page">
      <section className="overview-hero" aria-labelledby="insights-title">
        <div className="hero-copy"><span className="product-kicker">WTG Intelligence</span><h1 id="insights-title">AI Insights</h1><p>Surface the most important changes, risks, opportunities, and recommendations across your business.</p></div>
        <div className="revenue-action-area">
          <div className="revenue-controls">
            {[['Time Range', 'range', ranges], ['Business Area', 'area', areas], ['Priority', 'priority', priorities]].map(([label, key, options]) => <label className="filter-select" key={key}><span>{label}</span><select value={filters[key]} onChange={(event) => setFilters((current) => ({ ...current, [key]: event.target.value }))}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>)}
            <button className="button button--primary" type="button" onClick={() => { setBrief(true); setFeedback('Executive brief generated.'); }}><FileText size={17} aria-hidden="true" />Generate Executive Brief</button>
          </div>
        </div>
      </section>
      <div className="inline-status" aria-live="polite">{feedback || `${filters.range} / ${filters.area} / ${filters.priority}`}</div>
      <section className="metric-grid"><article className="metric-card"><h3>Active Insights</h3><strong>18</strong><p>across business areas</p></article><article className="metric-card"><h3>High Priority</h3><strong>5</strong><p>needs leadership review</p></article><article className="metric-card"><h3>Opportunities</h3><strong>7</strong><p>growth and efficiency</p></article><article className="metric-card"><h3>Risks</h3><strong>4</strong><p>active watch items</p></article><article className="metric-card"><h3>Decisions Pending</h3><strong>3</strong><p>open recommendations</p></article><article className="metric-card"><h3>Estimated Impact</h3><strong>$1.84M</strong><p>modeled demo impact</p></article></section>
      <div className="dashboard-grid operations-analysis-grid">
        <section className="panel"><div className="panel__header"><div><span className="eyebrow">Ranked Feed</span><h2>Prioritized Insights</h2></div></div><div className="insight-feed">{visibleInsights.map((item, index) => <button className={`insight-row ${selected.id === item.id ? 'is-selected' : ''}`} type="button" key={item.id} onClick={() => setSelected(item)}><span>{index + 1}</span><div><strong>{item.title}</strong><small>{item.area} / {item.entity} / {item.detected}</small><p>{item.explanation}</p></div><b>{item.impact}</b><em>{item.priority}</em></button>)}</div></section>
        <section className="panel risk-detail-panel"><div className="panel__header"><div><span className="eyebrow">Insight Detail</span><h2>{selected.title}</h2></div><span className="status-pill">{selected.priority}</span></div><div className="drawer-metrics risk-metrics"><div><span>Business Area</span><strong>{selected.area}</strong></div><div><span>Confidence</span><strong>{selected.confidence}</strong></div><div><span>Estimated Impact</span><strong>{selected.impact}</strong></div><div><span>Detected</span><strong>{selected.detected}</strong></div></div><div className="risk-impact"><span>Why this matters</span><p>{selected.explanation}</p></div><div className="risk-detail-grid"><div><h3>Supporting Signals</h3><ul className="drawer-list">{selected.signals.map((signal) => <li key={signal}>{signal}</li>)}</ul></div><div><h3>Recommended Actions</h3><ul className="drawer-list">{selected.actions.map((action) => <li key={action}>{action}</li>)}</ul></div></div><div className="button-row drawer-actions">{['revenue', 'customers', 'forecasting', 'operations'].map((page) => <button className="button button--secondary" type="button" key={page} onClick={() => onNavigate(page)}>View {page === 'forecasting' ? 'Forecast' : page[0].toUpperCase() + page.slice(1)}</button>)}</div></section>
      </div>
      <section className="panel"><div className="panel__header"><div><span className="eyebrow">Demo Explainability</span><h2>Why did Intelligence flag this?</h2></div></div><div className="explain-grid">{['Source metrics', 'Changes detected', 'Trend comparison', 'Confidence factors', 'Contributing signals'].map((label, index) => <div key={label}><span>{label}</span><strong>{selected.signals[index % selected.signals.length]}</strong><p>Fictional demo analysis derived from connected mock dashboard data.</p></div>)}</div></section>
      <section className="panel"><div className="panel__header"><div><span className="eyebrow">Recommended Actions</span><h2>Recommendations</h2></div></div><div className="opportunity-grid">{recommendations.map((item) => <article className="opportunity-card" key={item.title}><h3>{item.title}</h3><p>{item.area} / Owner: {item.owner}</p><b>{item.impact}</b><small>{item.confidence} confidence / {item.effort} effort</small><button type="button" onClick={() => addDecision(item)}>Add to Decision Log</button><button type="button" onClick={() => onNavigate(item.area.toLowerCase() === 'forecasting' ? 'forecasting' : item.area.toLowerCase())}>Open Workspace</button></article>)}</div></section>
      <div className="dashboard-grid operations-analysis-grid">
        <section className="panel"><div className="panel__header"><div><span className="eyebrow">Prompts</span><h2>Saved Intelligence Questions</h2></div></div><div className="saved-question-list">{questions.map((item) => <button type="button" key={item} onClick={() => { setQuestion(item); ask(item); }}>{item}</button>)}</div><label className="ask-box"><span>Ask Intelligence</span><textarea value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a question about your business..." /></label><div className="button-row drawer-actions"><button className="button button--primary" type="button" onClick={() => ask()}>Ask Intelligence</button><button className="button button--secondary" type="button" onClick={() => { if (question.trim()) setQuestions((current) => [...current, question]); setFeedback('Question saved locally.'); }}><Save size={16} aria-hidden="true" />Save Question</button></div>{response && <div className="risk-impact"><span>Mock intelligence response</span><p>{response}</p></div>}</section>
        <section className="panel"><div className="panel__header"><div><span className="eyebrow">Decisions</span><h2>Decision Log</h2></div><label className="compact-select"><span>Status</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>{['All', 'Approved', 'In Review', 'Deferred'].map((item) => <option key={item}>{item}</option>)}</select></label></div><div className="report-list">{visibleDecisions.map((item) => <article className="report-item" key={item.id}><span className="report-icon"><Brain size={16} aria-hidden="true" /></span><div><h3>{item.title}</h3><span>{item.owner} / {item.impact} / {item.date}</span></div><button type="button" onClick={() => setDecisions((current) => current.map((decision) => decision.id === item.id ? { ...decision, decision: decision.decision === 'Approved' ? 'In Review' : 'Approved' } : decision))}>{item.decision}</button></article>)}</div></section>
      </div>
      {brief && <section className="panel intelligence-panel"><div className="panel__header"><div><span className="eyebrow">Executive Brief</span><h2>Executive Brief</h2></div></div><p className="brief-summary">Business performance remains above plan, with revenue forecast at $8.92M and customer retention at 94.8%.</p><div className="brief-list"><strong>Top opportunities:</strong><ul><li>Enterprise expansion</li><li>Western region growth</li><li>Improved retention</li></ul></div><div className="brief-list"><strong>Primary risks:</strong><ul><li>Customer Operations capacity</li><li>Delayed expansion decisions</li><li>Renewal concentration</li></ul></div><p>Recommended leadership focus: Increase operations automation before projected peak demand while accelerating enterprise expansion conversations.</p><div className="button-row"><button className="button button--secondary" type="button" onClick={() => setFeedback('Executive brief saved.')}>Save Brief</button><button className="button button--secondary" type="button" onClick={() => setFeedback('Executive brief export prepared.')}>Export Brief</button><button className="button button--primary" type="button" onClick={() => onNavigate('reports')}>Add to Reports</button></div></section>}
    </div>
  );
}

export default InsightWorkspace;
