import { createElement, useState } from 'react';
import { Bell, ChevronDown, Menu, Search, X } from 'lucide-react';
import { navigationItems } from '../data/overviewData.js';

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span>WTG</span>
      <i />
    </div>
  );
}

function DashboardLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleFutureNav = (label) => {
    setFeedback(`${label} workspace is planned for Phase 2.`);
    setNavOpen(false);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${navOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        <div className="sidebar__brand">
          <BrandMark />
          <div>
            <strong>WTG Intelligence</strong>
            <span>See clearly. Decide faster.</span>
          </div>
        </div>

        <nav className="sidebar__nav">
          {navigationItems.map(({ label, icon: Icon, active, future }) => (
            <button
              className={`nav-item ${active ? 'is-active' : ''}`}
              type="button"
              key={label}
              aria-current={active ? 'page' : undefined}
              onClick={() => (future ? handleFutureNav(label) : setNavOpen(false))}
            >
              {createElement(Icon, { size: 18, 'aria-hidden': 'true' })}
              <span>{label}</span>
              {future && <small>Next</small>}
            </button>
          ))}
        </nav>

        <div className="sidebar__panel">
          <span>Workspace Health</span>
          <strong>98.2%</strong>
          <p>Data pipelines, forecasts, and AI briefings are operating normally.</p>
        </div>
      </aside>

      {navOpen && (
        <button className="nav-scrim" type="button" aria-label="Close navigation" onClick={() => setNavOpen(false)} />
      )}

      <div className="workspace">
        <header className="topbar">
          <button className="icon-button mobile-menu" type="button" aria-label="Open navigation" onClick={() => setNavOpen(true)}>
            <Menu size={20} />
          </button>
          <label className="search-field">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Search intelligence workspace</span>
            <input type="search" placeholder="Search metrics, reports, customers..." />
          </label>
          <div className="topbar__actions">
            <button className="icon-button" type="button" aria-label="Notifications">
              <Bell size={18} />
            </button>
            <button className="profile-button" type="button" onClick={() => setFeedback('Executive workspace menu opened.')}>
              <span>RW</span>
              <strong>Executive</strong>
              <ChevronDown size={16} aria-hidden="true" />
            </button>
          </div>
        </header>

        <main className="main-content">{children}</main>
        <div className="toast-region" aria-live="polite" aria-atomic="true">
          {feedback && (
            <div className="toast">
              <span>{feedback}</span>
              <button type="button" aria-label="Dismiss message" onClick={() => setFeedback('')}>
                <X size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
