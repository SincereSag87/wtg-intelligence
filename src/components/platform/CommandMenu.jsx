import { Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { insights, reports, savedQuestions } from '../../data/workspaceData.js';

const pages = [
  ['Overview', 'overview'],
  ['Revenue', 'revenue'],
  ['Operations', 'operations'],
  ['Customers', 'customers'],
  ['Forecasting', 'forecasting'],
  ['AI Insights', 'ai-insights'],
  ['Reports', 'reports'],
  ['Settings', 'settings'],
];

function CommandMenu({ open, onClose, onNavigate, onFeedback }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(() => {
    const all = [
      ...pages.map(([label, page]) => ({ label: `Navigate to ${label}`, meta: 'Navigate', run: () => onNavigate(page) })),
      ...reports.map((report) => ({ label: report.title, meta: 'Report', run: () => onFeedback(`Opening ${report.title} report preview.`) })),
      ...insights.map((insight) => ({ label: insight.title, meta: `Insight / ${insight.area}`, run: () => onNavigate('ai-insights') })),
      ...savedQuestions.map((question) => ({ label: question, meta: 'Saved question', run: () => onFeedback(`Asked Intelligence: ${question}`) })),
      { label: 'New Report', meta: 'Create', run: () => onNavigate('reports') },
      { label: 'New Scenario', meta: 'Create', run: () => onNavigate('forecasting') },
      { label: 'Ask Intelligence', meta: 'Create', run: () => onNavigate('ai-insights') },
    ];
    return all.filter((item) => `${item.label} ${item.meta}`.toLowerCase().includes(query.toLowerCase())).slice(0, 9);
  }, [onFeedback, onNavigate, query]);

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setActiveIndex(0);
    window.setTimeout(() => inputRef.current?.focus(), 0);
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, commands.length - 1));
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
      }
      if (event.key === 'Enter' && commands[activeIndex]) {
        commands[activeIndex].run();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [activeIndex, commands, onClose, open]);

  if (!open) return null;

  return (
    <div className="command-layer" role="presentation">
      <button className="drawer-scrim" type="button" aria-label="Close command menu" onClick={onClose} />
      <section className="command-menu" role="dialog" aria-modal="true" aria-labelledby="command-title">
        <div className="command-search">
          <Search size={18} aria-hidden="true" />
          <label className="sr-only" htmlFor="command-input">Search commands</label>
          <input id="command-input" ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search intelligence..." />
          <button type="button" aria-label="Close command menu" onClick={onClose}><X size={17} /></button>
        </div>
        <h2 id="command-title" className="sr-only">Command Menu</h2>
        <div className="command-results" role="listbox" aria-label="Command results">
          {commands.map((command, index) => (
            <button
              className={`command-item ${index === activeIndex ? 'is-selected' : ''}`}
              type="button"
              key={`${command.meta}-${command.label}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                command.run();
                onClose();
              }}
            >
              <span>{command.label}</span>
              <small>{command.meta}</small>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CommandMenu;
