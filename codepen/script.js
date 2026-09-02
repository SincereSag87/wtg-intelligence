const state = {
  page: "Overview",
  toast: "CodePen demo loaded.",
  mobileNav: false,
  commandOpen: false,
  commandQuery: "",
  commandIndex: 0,
  scenario: "Base Case",
  assumptions: {
    growth: 8.4,
    retention: 94.8,
    expansion: 14.2,
    automation: 6.8
  },
  selectedInsight: 0,
  decisionLog: [],
  selectedReport: null,
  reports: [
    { title: "Executive Performance", type: "Executive", date: "18 min ago", status: "Completed", format: "Executive Summary" },
    { title: "Revenue Analysis", type: "Revenue", date: "Aug 29, 2026", status: "Completed", format: "PDF" },
    { title: "Customer Health", type: "Customers", date: "Aug 28, 2026", status: "Completed", format: "CSV" },
    { title: "Forecast Review", type: "Forecasting", date: "Aug 27, 2026", status: "Scheduled", format: "PDF" },
    { title: "AI Insight Brief", type: "AI", date: "Aug 26, 2026", status: "Draft", format: "Executive Summary" }
  ],
  createReportOpen: false,
  newReport: {
    name: "",
    type: "Executive",
    range: "Quarter to Date",
    audience: "Executive",
    format: "Executive Summary"
  },
  settingsTab: "General",
  settings: {
    workspace: "WTG Intelligence",
    timezone: "Eastern Time",
    currency: "USD",
    startPage: "Overview",
    apiAccess: true,
    auditLogging: true,
    revenueVariance: true,
    customerRisk: true,
    forecastChanges: true,
    scheduledReports: true,
    securityAlerts: true,
    minimumConfidence: 80,
    sensitivity: "Medium",
    briefStyle: "Executive"
  },
  members: [
    { name: "Raymond Wannamaker", role: "Owner", status: "Active" },
    { name: "Maya Chen", role: "Admin", status: "Active" },
    { name: "Jordan Lee", role: "Analyst", status: "Active" },
    { name: "Elena Rodriguez", role: "Executive Viewer", status: "Active" }
  ],
  inviteName: ""
};

const pages = ["Overview", "Forecasting", "AI Insights", "Reports", "Settings"];
const scenarios = {
  "Base Case": { revenue: 8.92, margin: 69.1, confidence: 94, variance: "+1.9% vs target", summary: "Balanced outlook with enterprise expansion and retention above baseline." },
  Upside: { revenue: 9.48, margin: 70.4, confidence: 72, variance: "+8.3% vs target", summary: "Expansion acceleration and western pipeline conversion lift the quarter." },
  Downside: { revenue: 8.14, margin: 66.8, confidence: 81, variance: "-7.0% vs target", summary: "Capacity pressure and delayed expansion decisions soften the outlook." }
};
const insights = [
  { title: "Enterprise Expansion Acceleration", area: "Revenue", priority: "High", impact: "+$284K", confidence: "91%", entity: "Enterprise Services", why: "Expansion pipeline conversion is trending above the historical baseline.", signals: ["Expansion pipeline +18%", "Enterprise health +4 pts", "Renewal confidence +6 pts"], recommendation: "Prioritize expansion conversations with high-confidence enterprise accounts.", view: "Forecasting" },
  { title: "Customer Operations Capacity Risk", area: "Operations", priority: "Critical", impact: "-$92K", confidence: "88%", entity: "Customer Operations", why: "Projected workload may exceed staffing capacity before peak demand.", signals: ["Task volume +18%", "Staff availability -6%", "Manual review queue +24%"], recommendation: "Increase automation coverage before the next peak volume window.", view: "Forecasting" },
  { title: "Northstar Expansion Opportunity", area: "Customers", priority: "High", impact: "+$84K", confidence: "92%", entity: "Northstar Logistics", why: "Adoption and engagement signals indicate a timely expansion window.", signals: ["Usage +14%", "Support volume -18%", "Two under-adopted services"], recommendation: "Schedule an expansion review before Q4 planning.", view: "AI Insights" },
  { title: "Forecast Confidence Increased", area: "Forecasting", priority: "Medium", impact: "+2.4 pts", confidence: "94%", entity: "Quarter Forecast", why: "Pipeline reliability and retention stability improved confidence.", signals: ["Pipeline reliability 91%", "Retention stability 94%", "Forecast accuracy 96.2%"], recommendation: "Share the forecast brief with leadership.", view: "Forecasting" }
];

const root = document.getElementById("root");

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function money(value) {
  return `$${value.toFixed(2)}M`;
}

function setToast(message) {
  state.toast = message;
  render();
}

function navigate(page) {
  state.page = page;
  state.mobileNav = false;
  state.commandOpen = false;
  state.commandQuery = "";
  setToast(`Opened ${page}.`);
}

function adjustedScenario() {
  const base = scenarios[state.scenario];
  const revenue = base.revenue + (state.assumptions.growth - 8.4) * 0.035 + (state.assumptions.expansion - 14.2) * 0.025;
  return { ...base, revenue };
}

function metric(label, value, note) {
  return `<article class="card" tabindex="0"><span>${label}</span><strong>${value}</strong><small class="delta">${note}</small></article>`;
}

function header(title, subtitle, controls = "") {
  return `<section class="hero">
    <div class="hero-copy"><span class="kicker">WTG Intelligence</span><h1>${title}</h1><p>${subtitle}</p></div>
    <div class="controls">${controls}</div>
  </section>`;
}

function chart(values, labels, options = {}) {
  const max = Math.max(...values) * 1.14;
  const points = values.map((value, index) => [54 + index * (630 / (values.length - 1)), 252 - (value / max) * 190]);
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point[0].toFixed(1)} ${point[1].toFixed(1)}`).join(" ");
  const band = options.band ? `<path class="band" d="M 424 78 L 529 58 L 684 40 L 684 96 L 529 112 L 424 128 Z"></path>` : "";
  return `<div class="chart-wrap">
    <p class="sr-only">${esc(options.summary || "Interactive trend chart with increasing business performance values.")}</p>
    <svg viewBox="0 0 760 300" role="img" aria-label="${esc(options.label || "WTG Intelligence chart")}">
      <line x1="48" x2="730" y1="70" y2="70" class="gridline"></line>
      <line x1="48" x2="730" y1="140" y2="140" class="gridline"></line>
      <line x1="48" x2="730" y1="210" y2="210" class="gridline"></line>
      ${band}
      <path d="${path}" class="line ${options.lineClass || "accent"}"></path>
      <path d="M 54 104 L 159 98 L 264 92 L 369 84 L 474 78 L 579 70 L 684 62" class="line amber-line"></path>
      ${points.map((point, index) => `<circle class="point" tabindex="0" cx="${point[0].toFixed(1)}" cy="${point[1].toFixed(1)}" r="5" aria-label="${labels[index]} ${values[index].toFixed(2)} million"></circle>`).join("")}
      ${labels.map((label, index) => `<text x="${points[index][0].toFixed(1)}" y="286" text-anchor="middle" class="axis">${label}</text>`).join("")}
    </svg>
  </div>`;
}

function overview() {
  return `<div class="grid">
    ${header("Business performance at a glance.", "Monitor revenue, operations, customers, and forecasts from one connected intelligence workspace.")}
    <section class="grid metrics">
      ${metric("Revenue", "$2.84M", "+18.4%")}
      ${metric("Operational Efficiency", "92.7%", "+4.2%")}
      ${metric("AI-Driven Savings", "$184K", "+21.3%")}
      ${metric("Forecast Accuracy", "96.2%", "+2.1%")}
    </section>
    <div class="grid two">
      <section class="panel">
        <div class="panel-head"><div><span class="kicker">Analytics</span><h2>Revenue & Performance</h2></div><div class="legend"><span><i class="dot"></i>Revenue</span><span><i class="dot amber"></i>Forecast</span></div></div>
        ${chart([1.92, 2.04, 2.25, 2.44, 2.61, 2.84], ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], { label: "Revenue and performance chart" })}
      </section>
      <section class="panel brief">
        <span class="kicker">AI Analysis</span><h2>Intelligence Brief</h2>
        <p>Revenue is trending above forecast, driven by Enterprise Services and stronger customer retention.</p>
        <ul class="list"><li>Enterprise expansion is outperforming plan</li><li>Support automation reduced operating costs</li><li>Northeast churn risk increased slightly</li></ul>
        <div class="row"><button class="btn primary" data-action="toast" data-message="Insight opened.">Explore Insight</button><button class="btn" data-action="toast" data-message="Follow-up queued.">Ask Intelligence</button></div>
      </section>
    </div>
  </div>`;
}

function forecasting() {
  const scenario = adjustedScenario();
  return `<div class="grid">
    ${header("Forecasting", "Model future performance, test assumptions, and understand the drivers behind your outlook.", `<label class="control">Scenario <select data-action="scenario">${Object.keys(scenarios).map((name) => `<option ${state.scenario === name ? "selected" : ""}>${name}</option>`).join("")}</select></label>`)}
    <section class="grid metrics">
      ${metric("Projected Revenue", money(scenario.revenue), scenario.variance)}
      ${metric("Forecast Confidence", `${scenario.confidence}%`, "modeled")}
      ${metric("Projected Gross Margin", `${scenario.margin}%`, "+0.7 pts")}
      ${metric("Risk-Adjusted Forecast", money(scenario.revenue - 0.18), "-$180K risk")}
    </section>
    <div class="grid two">
      <section class="panel">
        <div class="panel-head"><div><span class="kicker">${state.scenario}</span><h2>Revenue Forecast</h2></div><div class="legend"><span><i class="dot blue"></i>Forecast</span><span><i class="dot amber"></i>Target</span></div></div>
        ${chart([2.46, 2.58, 2.64, 2.71, scenario.revenue / 3, scenario.revenue / 2.9, scenario.revenue / 2.72], ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], { label: "Revenue forecast chart", band: true, lineClass: "blue-line", summary: `Forecast projects ${money(scenario.revenue)} with ${scenario.confidence}% confidence.` })}
      </section>
      <section class="panel brief"><h2>Forecast Brief</h2><p>WTG Intelligence projects ${money(scenario.revenue)}, with confidence at ${scenario.confidence}%. ${scenario.summary}</p><button class="btn primary" data-action="toast" data-message="Executive forecast brief generated.">Generate Executive Brief</button></section>
    </div>
    <section class="grid scenario">
      ${Object.entries(scenarios).map(([name, item]) => `<button class="${state.scenario === name ? "active" : ""}" data-action="scenario-card" data-scenario="${name}"><span>${name}</span><strong>${money(item.revenue)}</strong><small>Margin ${item.margin}% / Confidence ${item.confidence}%</small><div class="range"><i style="width:${item.confidence}%"></i></div></button>`).join("")}
    </section>
    <section class="panel"><div class="panel-head"><div><span class="kicker">Editable</span><h2>Forecast Assumptions</h2></div></div>
      <div class="grid assumptions">
        ${[["Revenue Growth", "growth"], ["Retention", "retention"], ["Expansion Rate", "expansion"], ["Automation Improvement", "automation"]].map(([label, key]) => `<label class="field">${label}<input type="number" step="0.1" value="${state.assumptions[key]}" data-assumption="${key}"></label>`).join("")}
      </div>
      <div class="row"><button class="btn primary" data-action="apply-assumptions">Apply Assumptions</button><button class="btn" data-action="reset-assumptions">Reset</button></div>
    </section>
  </div>`;
}

function aiInsights() {
  const selected = insights[state.selectedInsight];
  return `<div class="grid">
    ${header("AI Insights", "Surface the most important changes, risks, opportunities, and recommendations across your business.", `<button class="btn primary" data-action="toast" data-message="Executive brief generated.">Generate Executive Brief</button>`)}
    <section class="grid metrics">${[["Active Insights", "18"], ["High Priority", "5"], ["Opportunities", "7"], ["Estimated Impact", "$1.84M"]].map(([a, b]) => metric(a, b, "demo analysis")).join("")}</section>
    <div class="grid two">
      <section class="panel"><h2>Prioritized Insights</h2><div class="feed">
        ${insights.map((item, index) => `<button class="feed-btn ${state.selectedInsight === index ? "active" : ""}" data-action="select-insight" data-index="${index}"><div><strong>${item.title}</strong><p>${item.why}</p><small>${item.area} / ${item.entity}</small></div><div><span class="${item.priority === "Critical" ? "tag critical" : "tag"}">${item.priority}</span><b>${item.impact}</b></div></button>`).join("")}
      </div></section>
      <section class="panel brief"><h2>${selected.title}</h2><p>${selected.why}</p><dl class="details"><div><dt>Priority</dt><dd>${selected.priority}</dd></div><div><dt>Confidence</dt><dd>${selected.confidence}</dd></div><div><dt>Impact</dt><dd>${selected.impact}</dd></div></dl>
        <h3>Why did Intelligence flag this?</h3><ul class="list">${selected.signals.map((signal) => `<li>${signal}</li>`).join("")}</ul><p><strong>Recommendation:</strong> ${selected.recommendation}</p>
        <div class="row"><button class="btn" data-action="toast" data-message="Insight marked reviewed.">Mark Reviewed</button><button class="btn primary" data-action="decision-log">Add to Decision Log</button><button class="btn" data-action="nav" data-page="${selected.view}">Open Workspace</button></div>
      </section>
    </div>
    <section class="panel"><div class="panel-head"><div><span class="kicker">Local Demo</span><h2>Decision Log</h2></div></div>${state.decisionLog.length ? `<div class="table-wrap"><table><thead><tr><th>Decision</th><th>Status</th><th>Owner</th><th>Impact</th></tr></thead><tbody>${state.decisionLog.map((item) => `<tr><td>${item.title}</td><td>In Review</td><td>${item.area}</td><td>${item.impact}</td></tr>`).join("")}</tbody></table></div>` : `<p>No recommendations have been added yet.</p>`}</section>
  </div>`;
}

function reports() {
  return `<div class="grid">
    ${header("Reports", "Create, review, and share executive-ready business intelligence.", `<button class="btn primary" data-action="create-report-open">Create Report</button><button class="btn" data-action="toast" data-message="Report schedule prepared.">Schedule Report</button>`)}
    <section class="grid metrics">${[["Reports Generated", "48"], ["Scheduled", "6"], ["Shared", "14"], ["Executive Briefs", "12"]].map(([a, b]) => metric(a, b, "portfolio demo")).join("")}</section>
    <section class="panel"><div class="panel-head"><div><span class="kicker">Library</span><h2>Report Library</h2></div></div><div class="table-wrap"><table><thead><tr><th>Report</th><th>Type</th><th>Date</th><th>Status</th><th>Format</th><th>Actions</th></tr></thead><tbody>
      ${state.reports.map((report, index) => `<tr><td>${report.title}</td><td>${report.type}</td><td>${report.date}</td><td><span class="tag">${report.status}</span></td><td>${report.format}</td><td><button class="link-btn" data-action="view-report" data-index="${index}">View</button><button class="link-btn" data-action="toast" data-message="${report.title} regenerated.">Regenerate</button><button class="link-btn" data-action="duplicate-report" data-index="${index}">Duplicate</button></td></tr>`).join("")}
    </tbody></table></div></section>
    <section class="grid three">${["Weekly Executive Brief", "Monthly Revenue Review", "Customer Risk Review"].map((name) => `<article class="panel template"><h3>${name}</h3><p>Template for polished leadership reporting.</p><button class="btn" data-action="template" data-name="${name}">Use Template</button></article>`).join("")}</section>
  </div>`;
}

function settings() {
  const tabs = ["General", "Team & Roles", "Notifications", "Data & Analytics", "AI Defaults", "Security", "Billing"];
  return `<div class="grid">
    ${header("Settings", "Configure the demo workspace, team preferences, intelligence defaults, and plan controls.", `<button class="btn primary" data-action="toast" data-message="Settings saved locally.">Save Changes</button>`)}
    <section class="panel tabs" role="tablist" aria-label="Settings sections">${tabs.map((tab) => `<button role="tab" aria-selected="${state.settingsTab === tab}" class="${state.settingsTab === tab ? "active" : ""}" data-action="settings-tab" data-tab="${tab}">${tab}</button>`).join("")}</section>
    <section class="panel">${settingsPanel()}</section>
  </div>`;
}

function settingsPanel() {
  if (state.settingsTab === "General") {
    return `<h2>General</h2><div class="grid form-grid">${input("Workspace Name", "workspace")} ${select("Time Zone", "timezone", ["Eastern Time", "Central Time", "Pacific Time"])} ${select("Currency", "currency", ["USD", "EUR", "GBP"])} ${select("Default Start Page", "startPage", pages)}</div>`;
  }
  if (state.settingsTab === "Team & Roles") {
    return `<h2>Team & Roles</h2><div class="table-wrap"><table><thead><tr><th>Member</th><th>Role</th><th>Status</th><th>Action</th></tr></thead><tbody>${state.members.map((member, index) => `<tr><td>${member.name}</td><td><select data-action="member-role" data-index="${index}">${["Owner", "Admin", "Analyst", "Executive Viewer", "Viewer"].map((role) => `<option ${member.role === role ? "selected" : ""}>${role}</option>`).join("")}</select></td><td>${member.status}</td><td><button class="link-btn" data-action="remove-member" data-index="${index}">Remove</button></td></tr>`).join("")}</tbody></table></div><div class="row"><input class="text-input" placeholder="Demo member name" value="${esc(state.inviteName)}" data-action="invite-name"><button class="btn primary" data-action="invite-member">Invite</button></div>`;
  }
  if (state.settingsTab === "Notifications") {
    return `<h2>Notifications</h2><div class="check-grid">${[["Revenue Variance", "revenueVariance"], ["Customer Risk", "customerRisk"], ["Forecast Changes", "forecastChanges"], ["Scheduled Reports", "scheduledReports"], ["Security Alerts", "securityAlerts"]].map(([label, key]) => toggle(label, key)).join("")}</div>`;
  }
  if (state.settingsTab === "Data & Analytics") {
    return `<h2>Data & Analytics</h2><p>This CodePen uses demo-only controls and mock data.</p><div class="grid form-grid">${select("Default Reporting Period", "reportingPeriod", ["Quarter to Date", "Last 30 Days", "Year to Date"])}${select("Forecast Horizon", "forecastHorizon", ["Quarter", "6 Months", "12 Months"])}${select("Refresh Frequency", "refresh", ["Every 15 minutes", "Hourly", "Daily"])}${select("Retention Window", "retentionWindow", ["90 days", "180 days", "1 year"])}</div>`;
  }
  if (state.settingsTab === "AI Defaults") {
    return `<h2>AI Defaults</h2><div class="grid form-grid">${select("Insight Sensitivity", "sensitivity", ["Low", "Medium", "High"])}<label class="field">Minimum Confidence<input type="number" value="${state.settings.minimumConfidence}" data-setting="minimumConfidence"></label>${select("Brief Style", "briefStyle", ["Executive", "Analyst", "Board"])}<label class="check"><input type="checkbox" checked> Saved Prompt History</label></div>`;
  }
  if (state.settingsTab === "Security") {
    return `<h2>Security</h2><div class="check-grid">${toggle("API Access", "apiAccess")}${toggle("Audit Logging", "auditLogging")}</div><p><strong>Demo API Key:</strong> wtg_demo_sk_****************8f2a</p><div class="row"><button class="btn" data-action="toast" data-message="Masked demo key created.">Create Demo Key</button><button class="btn" data-action="toast" data-message="Demo key revoked.">Revoke</button></div>`;
  }
  return `<h2>Billing</h2><div class="grid two"><article><span class="kicker">Current Plan</span><h2>Intelligence Scale</h2><p><strong>$299/month</strong></p><ul class="list"><li>Data Records: 8.4M / 10M</li><li>Forecast Runs: 842 / 1,000</li><li>Team Members: 5 / 10</li><li>Scheduled Reports: 6 / 20</li></ul></article><article><div class="grid form-grid">${plainInput("Name on Card", "Demo User")}${plainInput("Debit/Credit Card", "Demo only - do not enter a real card")}${plainInput("Billing Address", "100 Portfolio Ave")}</div><div class="row"><button class="btn primary" data-action="toast" data-message="Billing update simulated. No payment data was stored.">Update Billing</button><button class="btn" data-action="toast" data-message="Billing information displayed for demo review.">View Billing Information</button><button class="btn" data-action="toast" data-message="Billing deactivation simulated.">Deactivate Billing</button></div></article></div>`;
}

function input(label, key) {
  return `<label class="field">${label}<input value="${esc(state.settings[key] || "")}" data-setting="${key}"></label>`;
}

function plainInput(label, value) {
  return `<label class="field">${label}<input value="${esc(value)}"></label>`;
}

function select(label, key, options) {
  return `<label class="field">${label}<select data-setting="${key}">${options.map((option) => `<option ${state.settings[key] === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function toggle(label, key) {
  return `<label class="check"><input type="checkbox" ${state.settings[key] ? "checked" : ""} data-toggle="${key}"> ${label}</label>`;
}

function drawer() {
  if (state.selectedReport === null && !state.createReportOpen) return "";
  if (state.createReportOpen) {
    return `<div class="scrim" data-action="close-overlay"></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="Create report"><button class="icon-btn close" data-action="close-overlay" aria-label="Close">x</button><span class="kicker">Reports</span><h2>Create Report</h2><div class="grid form-grid"><label class="field">Report Name<input value="${esc(state.newReport.name)}" data-new-report="name" placeholder="Weekly Executive Brief"></label>${selectNewReport("Type", "type", ["Executive", "Revenue", "Customer", "Forecast", "AI Insight"])}${selectNewReport("Date Range", "range", ["Last 30 Days", "Quarter to Date", "Year to Date"])}${selectNewReport("Audience", "audience", ["Executive", "Board", "Sales", "Finance"])}${selectNewReport("Format", "format", ["Executive Summary", "PDF", "CSV", "Presentation Summary"])}</div><div class="row"><button class="btn" data-action="close-overlay">Cancel</button><button class="btn primary" data-action="create-report">Generate Report</button></div></aside>`;
  }
  const report = state.reports[state.selectedReport];
  return `<div class="scrim" data-action="close-overlay"></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="Report preview"><button class="icon-btn close" data-action="close-overlay" aria-label="Close">x</button><span class="kicker">${report.type}</span><h2>${report.title}</h2><dl class="details"><div><dt>Period</dt><dd>Quarter to Date</dd></div><div><dt>Generated</dt><dd>${report.date}</dd></div><div><dt>Status</dt><dd>${report.status}</dd></div><div><dt>Format</dt><dd>${report.format}</dd></div></dl><p>Executive summary preview with revenue, customer, forecast, and AI insight highlights prepared from fictional demo data.</p><ul class="list"><li>Projected revenue remains above plan</li><li>Retention and expansion are improving</li><li>Capacity remains the primary operational risk</li></ul><button class="btn primary" data-action="toast" data-message="${report.title} export prepared.">Export</button></aside>`;
}

function selectNewReport(label, key, options) {
  return `<label class="field">${label}<select data-new-report="${key}">${options.map((option) => `<option ${state.newReport[key] === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function commandMenu() {
  if (!state.commandOpen) return "";
  const all = [
    ...pages.map((page) => ({ label: `Navigate to ${page}`, action: "nav", page })),
    { label: "Ask Intelligence", action: "toast", message: "Ask Intelligence opened." },
    { label: "Create Report", action: "create-report-open" },
    { label: "Create Scenario", action: "nav", page: "Forecasting" }
  ];
  const filtered = all.filter((item) => item.label.toLowerCase().includes(state.commandQuery.toLowerCase()));
  return `<div class="scrim" data-action="command-close"></div><section class="command" role="dialog" aria-modal="true" aria-label="Command menu"><input id="commandInput" aria-label="Search commands" placeholder="Search intelligence..." value="${esc(state.commandQuery)}" data-action="command-query"><div class="command-list">${filtered.map((item, index) => `<button class="${index === state.commandIndex ? "active" : ""}" data-command-index="${index}">${item.label}<small>${item.page || "Action"}</small></button>`).join("") || `<p>No commands found.</p>`}</div></section>`;
}

function renderPage() {
  if (state.page === "Forecasting") return forecasting();
  if (state.page === "AI Insights") return aiInsights();
  if (state.page === "Reports") return reports();
  if (state.page === "Settings") return settings();
  return overview();
}

function render() {
  root.innerHTML = `<div class="shell">
    <aside class="side ${state.mobileNav ? "open" : ""}">
      <div class="brand"><div class="mark">WTG</div><div><strong>WTG Intelligence</strong><span>See clearly. Decide faster.</span></div></div>
      <nav class="nav" aria-label="Demo pages">${pages.map((page) => `<button class="${state.page === page ? "active" : ""}" data-action="nav" data-page="${page}">${page}</button>`).join("")}</nav>
      <div class="foot"><span>WTG Intelligence</span><strong>Scale Plan</strong></div>
    </aside>
    <div class="workspace">
      <header class="top"><button class="icon-btn menu-btn" data-action="mobile-nav" aria-label="Toggle navigation">Menu</button><button class="search-btn" data-action="command-open"><span>Search intelligence...</span><kbd>Ctrl K</kbd></button><div class="status" role="status" aria-live="polite">${state.toast}</div></header>
      <main class="main">${renderPage()}</main>
    </div>
    ${drawer()}${commandMenu()}
  </div>`;
  const commandInput = document.getElementById("commandInput");
  if (commandInput) commandInput.focus();
}

function getCommands() {
  return [
    ...pages.map((page) => ({ label: `Navigate to ${page}`, action: "nav", page })),
    { label: "Ask Intelligence", action: "toast", message: "Ask Intelligence opened." },
    { label: "Create Report", action: "create-report-open" },
    { label: "Create Scenario", action: "nav", page: "Forecasting" }
  ].filter((item) => item.label.toLowerCase().includes(state.commandQuery.toLowerCase()));
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-command-index]");
  if (!target) return;
  const action = target.dataset.action;
  if (target.dataset.commandIndex) {
    const command = getCommands()[Number(target.dataset.commandIndex)];
    if (command) runCommand(command);
    return;
  }
  if (action === "nav") navigate(target.dataset.page);
  if (action === "toast") setToast(target.dataset.message);
  if (action === "mobile-nav") { state.mobileNav = !state.mobileNav; render(); }
  if (action === "scenario-card") { state.scenario = target.dataset.scenario; setToast(`${state.scenario} scenario selected.`); }
  if (action === "apply-assumptions") setToast("Assumptions applied to local forecast.");
  if (action === "reset-assumptions") { state.assumptions = { growth: 8.4, retention: 94.8, expansion: 14.2, automation: 6.8 }; setToast("Forecast assumptions reset."); }
  if (action === "select-insight") { state.selectedInsight = Number(target.dataset.index); render(); }
  if (action === "decision-log") { state.decisionLog.unshift(insights[state.selectedInsight]); setToast("Recommendation added to decision log."); }
  if (action === "view-report") { state.selectedReport = Number(target.dataset.index); render(); }
  if (action === "duplicate-report") { state.reports.unshift({ ...state.reports[Number(target.dataset.index)], title: `${state.reports[Number(target.dataset.index)].title} Copy`, status: "Draft" }); setToast("Report duplicated."); }
  if (action === "create-report-open") { state.createReportOpen = true; state.selectedReport = null; render(); }
  if (action === "template") { state.newReport.name = target.dataset.name; state.createReportOpen = true; render(); }
  if (action === "create-report") { state.reports.unshift({ title: state.newReport.name || "New Executive Report", type: state.newReport.type, date: "Just now", status: "Draft", format: state.newReport.format }); state.createReportOpen = false; setToast("Report created locally."); }
  if (action === "close-overlay") { state.selectedReport = null; state.createReportOpen = false; render(); }
  if (action === "settings-tab") { state.settingsTab = target.dataset.tab; render(); }
  if (action === "remove-member") { state.members.splice(Number(target.dataset.index), 1); setToast("Team member removed locally."); }
  if (action === "invite-member") { state.members.push({ name: state.inviteName || "Invited Demo User", role: "Viewer", status: "Invited" }); state.inviteName = ""; setToast("Demo invitation created."); }
  if (action === "command-open") { state.commandOpen = true; state.commandIndex = 0; render(); }
  if (action === "command-close") { state.commandOpen = false; render(); }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.assumption) state.assumptions[target.dataset.assumption] = Number(target.value);
  if (target.dataset.setting) state.settings[target.dataset.setting] = target.type === "number" ? Number(target.value) : target.value;
  if (target.dataset.toggle) state.settings[target.dataset.toggle] = target.checked;
  if (target.dataset.newReport) state.newReport[target.dataset.newReport] = target.value;
  if (target.dataset.action === "invite-name") state.inviteName = target.value;
  if (target.dataset.action === "command-query") { state.commandQuery = target.value; state.commandIndex = 0; render(); }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.dataset.action === "scenario") { state.scenario = target.value; setToast(`${target.value} scenario selected.`); }
  if (target.dataset.action === "member-role") { state.members[Number(target.dataset.index)].role = target.value; setToast("Role changed locally."); }
});

document.addEventListener("keydown", (event) => {
  const isCommand = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
  if (isCommand) {
    event.preventDefault();
    state.commandOpen = true;
    state.commandIndex = 0;
    render();
  }
  if (event.key === "Escape") {
    state.commandOpen = false;
    state.selectedReport = null;
    state.createReportOpen = false;
    state.mobileNav = false;
    render();
  }
  if (state.commandOpen && ["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) {
    event.preventDefault();
    const commands = getCommands();
    if (event.key === "ArrowDown") state.commandIndex = Math.min(state.commandIndex + 1, commands.length - 1);
    if (event.key === "ArrowUp") state.commandIndex = Math.max(state.commandIndex - 1, 0);
    if (event.key === "Enter" && commands[state.commandIndex]) runCommand(commands[state.commandIndex]);
    render();
  }
});

function runCommand(command) {
  if (command.action === "nav") navigate(command.page);
  if (command.action === "toast") setToast(command.message);
  if (command.action === "create-report-open") {
    state.commandOpen = false;
    state.createReportOpen = true;
    state.page = "Reports";
    setToast("Create Report opened.");
  }
}

render();
