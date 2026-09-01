import React, { useEffect, useMemo, useRef, useState } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

const h = React.createElement;

const pages = ["Overview", "Forecasting", "AI Insights", "Reports", "Settings"];
const scenarios = {
  "Base Case": { revenue: 8.92, margin: 69.1, confidence: 94, variance: "+1.9% vs target", range: [8.61, 9.24] },
  Upside: { revenue: 9.48, margin: 70.4, confidence: 72, variance: "+8.3% vs target", range: [9.08, 9.82] },
  Downside: { revenue: 8.14, margin: 66.8, confidence: 81, variance: "-7.0% vs target", range: [7.86, 8.42] }
};
const insights = [
  { title: "Enterprise Expansion Acceleration", area: "Revenue", priority: "High", impact: "+$284K", confidence: "91%", entity: "Enterprise Services", why: "Expansion pipeline conversion is trending above the historical baseline.", signals: ["expansion pipeline +18%", "enterprise health +4 pts", "renewal confidence +6 pts"], recommendation: "Prioritize expansion conversations with high-confidence enterprise accounts." },
  { title: "Customer Operations Capacity Risk", area: "Operations", priority: "Critical", impact: "-$92K", confidence: "88%", entity: "Customer Operations", why: "Projected workload may exceed staffing capacity before peak demand.", signals: ["task volume +18%", "staff availability -6%", "manual review queue +24%"], recommendation: "Increase automation coverage before the next peak volume window." },
  { title: "Northstar Expansion Opportunity", area: "Customers", priority: "High", impact: "+$84K", confidence: "92%", entity: "Northstar Logistics", why: "Adoption and engagement signals indicate a timely expansion window.", signals: ["usage +14%", "support volume -18%", "two under-adopted services"], recommendation: "Schedule an expansion review before Q4 planning." },
  { title: "Forecast Confidence Increased", area: "Forecasting", priority: "Medium", impact: "+2.4 pts", confidence: "94%", entity: "Quarter Forecast", why: "Pipeline reliability and retention stability improved confidence.", signals: ["pipeline reliability 91%", "retention stability 94%", "forecast accuracy 96.2%"], recommendation: "Share the forecast brief with leadership." }
];
const reportSeed = ["Executive Performance", "Revenue Analysis", "Customer Health", "Forecast Review", "AI Insight Brief"].map((title, index) => ({ id: title, title, type: ["Executive", "Revenue", "Customers", "Forecasting", "AI"][index], date: index ? "Aug 29, 2026" : "18 min ago", status: index === 4 ? "Draft" : "Completed", format: index === 2 ? "CSV" : "Executive Summary" }));
const membersSeed = ["Raymond Wannamaker|Owner|Active", "Maya Chen|Admin|Active", "Jordan Lee|Analyst|Active", "Elena Rodriguez|Executive Viewer|Active"].map((row) => { const [name, role, status] = row.split("|"); return { name, role, status }; });

function money(n) { return `$${n.toFixed(2)}M`; }
function Card({ label, value, note }) { return h("article", { className: "card", tabIndex: 0 }, h("span", null, label), h("strong", null, value), h("small", { className: "delta" }, note)); }
function Header({ title, subtitle, children }) { return h("section", { className: "hero" }, h("div", { className: "hero-copy" }, h("span", { className: "kicker" }, "WTG Intelligence"), h("h1", null, title), h("p", null, subtitle)), h("div", { className: "controls" }, children)); }
function Chart({ scenario, simple }) {
  const [active, setActive] = useState(5);
  const values = simple ? [1.92, 2.04, 2.25, 2.44, 2.61, 2.84] : [2.46, 2.58, 2.64, 2.71, scenario.revenue / 3, scenario.revenue / 2.9, scenario.revenue / 2.72];
  const pts = values.map((v, i) => [54 + i * 105, 260 - v * 68]);
  const d = pts.map((p, i) => `${i ? "L" : "M"} ${p[0]} ${p[1]}`).join(" ");
  return h("div", { className: "chart-wrap" },
    h("p", { className: "sr-only" }, simple ? "Revenue and performance trend increases over the demo period." : `Forecast projects ${money(scenario.revenue)} with ${scenario.confidence}% confidence.`),
    h("svg", { viewBox: "0 0 760 300", role: "img", "aria-label": simple ? "Revenue performance chart" : "Revenue forecast chart" },
      [70, 140, 210].map((y) => h("line", { key: y, x1: 48, x2: 730, y1: y, y2: y, className: "gridline" })),
      !simple && h("path", { className: "band", d: "M 474 78 L 579 58 L 684 40 L 684 88 L 579 104 L 474 122 Z" }),
      h("path", { d, className: simple ? "line accent" : "line blue-line" }),
      h("path", { d: "M 54 104 L 159 98 L 264 92 L 369 84 L 474 78 L 579 70 L 684 62", className: "line amber-line" }),
      pts.map((p, i) => h("rect", { key: i, x: p[0] - 28, y: 30, width: 56, height: 230, fill: "transparent", tabIndex: 0, role: "button", "aria-label": `Point ${i + 1}: ${values[i].toFixed(2)} million`, onFocus: () => setActive(i), onMouseEnter: () => setActive(i) })),
      h("line", { x1: pts[active][0], x2: pts[active][0], y1: 35, y2: 260, className: "hover-line" }),
      pts.map((p, i) => h("text", { key: `m${i}`, x: p[0], y: 286, textAnchor: "middle", className: "axis" }, ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"][i] || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]))
    ),
    h("div", { className: "tooltip", style: { left: `${(active / (pts.length - 1)) * 100}%` } }, h("strong", null, "Selected"), h("span", null, money(values[active])))
  );
}

function Overview({ toast }) {
  return h("div", { className: "grid" }, h(Header, { title: "Business performance at a glance.", subtitle: "Monitor revenue, operations, customers, and forecasts from one connected intelligence workspace." }),
    h("section", { className: "grid metrics" }, h(Card, { label: "Revenue", value: "$2.84M", note: "+18.4%" }), h(Card, { label: "Operational Efficiency", value: "92.7%", note: "+4.2%" }), h(Card, { label: "AI-Driven Savings", value: "$184K", note: "+21.3%" }), h(Card, { label: "Forecast Accuracy", value: "96.2%", note: "+2.1%" })),
    h("div", { className: "grid two" }, h("section", { className: "panel" }, h("div", { className: "panel-head" }, h("div", null, h("span", { className: "kicker" }, "Analytics"), h("h2", null, "Revenue & Performance")), h("div", { className: "legend" }, h("span", null, h("i", { className: "dot" }), "Revenue"), h("span", null, h("i", { className: "dot amber" }), "Forecast"))), h(Chart, { simple: true })), h("section", { className: "panel brief" }, h("span", { className: "kicker" }, "AI Analysis"), h("h2", null, "Intelligence Brief"), h("p", null, "Revenue is trending above forecast, driven by Enterprise Services and stronger customer retention."), h("ul", { className: "list" }, ["Enterprise expansion is outperforming plan", "Support automation reduced operating costs", "Northeast churn risk increased slightly"].map((x) => h("li", { key: x }, x))), h("div", { className: "row" }, h("button", { className: "btn primary", onClick: () => toast("Insight opened.") }, "Explore Insight"), h("button", { className: "btn", onClick: () => toast("Follow-up queued.") }, "Ask Intelligence")))));
}

function Forecasting({ toast }) {
  const [name, setName] = useState("Base Case");
  const [assumptions, setAssumptions] = useState({ growth: 8.4, retention: 94.8, expansion: 14.2, automation: 6.8 });
  const scenario = scenarios[name];
  const adjusted = scenario.revenue + (assumptions.growth - 8.4) * .035 + (assumptions.expansion - 14.2) * .025;
  return h("div", { className: "grid" }, h(Header, { title: "Forecasting", subtitle: "Model future performance, test assumptions, and understand the drivers behind your outlook." }, h("label", { className: "control" }, "Scenario", h("select", { value: name, onChange: (e) => setName(e.target.value) }, Object.keys(scenarios).map((s) => h("option", { key: s }, s))))),
    h("section", { className: "grid metrics" }, h(Card, { label: "Projected Revenue", value: money(adjusted), note: scenario.variance }), h(Card, { label: "Forecast Confidence", value: `${scenario.confidence}%`, note: "modeled" }), h(Card, { label: "Projected Gross Margin", value: `${scenario.margin}%`, note: "+0.7 pts" }), h(Card, { label: "Risk-Adjusted Forecast", value: money(adjusted - .18), note: "-$180K risk" })),
    h("div", { className: "grid two" }, h("section", { className: "panel" }, h("div", { className: "panel-head" }, h("div", null, h("span", { className: "kicker" }, name), h("h2", null, "Revenue Forecast")), h("div", { className: "legend" }, h("span", null, h("i", { className: "dot blue" }), "Forecast"), h("span", null, h("i", { className: "dot amber" }), "Target"))), h(Chart, { scenario: { ...scenario, revenue: adjusted } })), h("section", { className: "panel brief" }, h("h2", null, "Forecast Brief"), h("p", null, `WTG Intelligence projects ${money(adjusted)}, with confidence at ${scenario.confidence}%. Enterprise expansion and retention are the primary upside factors.`), h("button", { className: "btn primary", onClick: () => toast("Executive forecast brief generated.") }, "Generate Executive Brief"))),
    h("section", { className: "grid scenario" }, Object.entries(scenarios).map(([k, s]) => h("button", { key: k, className: k === name ? "active" : "", onClick: () => setName(k) }, h("span", null, k), h("strong", null, money(s.revenue)), h("small", null, `Margin ${s.margin}% / Confidence ${s.confidence}%`), h("div", { className: "range" }, h("i", { style: { width: `${s.confidence}%` } })) ))),
    h("section", { className: "panel" }, h("div", { className: "panel-head" }, h("div", null, h("span", { className: "kicker" }, "Editable"), h("h2", null, "Forecast Assumptions"))), h("div", { className: "grid assumptions" }, [["Revenue Growth", "growth"], ["Retention", "retention"], ["Expansion Rate", "expansion"], ["Automation Improvement", "automation"]].map(([label, key]) => h("label", { className: "field", key }, label, h("input", { type: "number", step: "0.1", value: assumptions[key], onChange: (e) => setAssumptions({ ...assumptions, [key]: Number(e.target.value) }) })))), h("button", { className: "btn primary", onClick: () => toast("Assumptions applied to local forecast.") }, "Apply Assumptions")));
}

function AIInsights({ toast, nav }) {
  const [selected, setSelected] = useState(insights[0]);
  const [log, setLog] = useState([]);
  return h("div", { className: "grid" },
    h(Header, { title: "AI Insights", subtitle: "Surface the most important changes, risks, opportunities, and recommendations across your business." },
      h("button", { className: "btn primary", onClick: () => toast("Executive brief generated.") }, "Generate Executive Brief")
    ),
    h("section", { className: "grid metrics" }, [["Active Insights", "18"], ["High Priority", "5"], ["Opportunities", "7"], ["Estimated Impact", "$1.84M"]].map(([a, b]) => h(Card, { key: a, label: a, value: b, note: "demo analysis" }))),
    h("div", { className: "grid two" },
      h("section", { className: "panel" },
        h("h2", null, "Prioritized Insights"),
        h("div", { className: "feed" }, insights.map((item) => h("button", { className: `feed-btn ${selected.title === item.title ? "active" : ""}`, key: item.title, onClick: () => setSelected(item) },
          h("div", null, h("strong", null, item.title), h("p", null, item.why), h("small", null, `${item.area} / ${item.entity}`)),
          h("div", null, h("span", { className: item.priority === "Critical" ? "tag critical" : "tag" }, item.priority), h("b", null, item.impact))
        )))
      ),
      h("section", { className: "panel brief" },
        h("h2", null, selected.title),
        h("p", null, selected.why),
        h("strong", null, "Supporting Signals"),
        h("ul", { className: "list" }, selected.signals.map((x) => h("li", { key: x }, x))),
        h("p", null, `Recommendation: ${selected.recommendation}`),
        h("div", { className: "row" },
          h("button", { className: "btn", onClick: () => toast("Insight marked reviewed.") }, "Mark Reviewed"),
          h("button", { className: "btn primary", onClick: () => { setLog([selected.title, ...log]); toast("Added to decision log."); } }, "Add to Decision Log"),
          h("button", { className: "btn", onClick: () => nav(selected.area === "Revenue" ? "Overview" : selected.area) }, "Open Workspace")
        )
      )
    ),
    h("section", { className: "panel" },
      h("h2", null, "Why did Intelligence flag this?"),
      h("div", { className: "grid three" }, ["Source metrics", "Changes detected", "Trend comparison"].map((x, i) => h("div", { className: "setting-card", key: x }, h("h3", null, x), h("p", null, selected.signals[i] || "Fictional demo analysis from mock dashboard data."))))
    ),
    h("section", { className: "panel" },
      h("h2", null, "Decision Log"),
      h("ul", { className: "list" }, (log.length ? log : ["Increase Customer Operations Automation", "Prioritize Enterprise Expansion"]).map((x) => h("li", { key: x }, x)))
    )
  );
}

function Reports({ toast }) {
  const [reports, setReports] = useState(reportSeed);
  const [selected, setSelected] = useState(null);
  const [create, setCreate] = useState(false);
  const [draft, setDraft] = useState({ name: "Weekly Executive Brief", type: "Executive", range: "Last 7 Days", audience: "Executive", format: "Executive Summary" });
  const add = () => { const r = { id: draft.name, title: draft.name, type: draft.type, date: "Just now", status: "Draft", format: draft.format }; setReports([r, ...reports]); setCreate(false); toast("Report created locally."); };
  return h("div", { className: "grid" }, h(Header, { title: "Reports", subtitle: "Create, review, and share executive-ready business intelligence." }, h("button", { className: "btn primary", onClick: () => setCreate(true) }, "Create Report"), h("button", { className: "btn", onClick: () => toast("Report scheduled locally. No delivery sent.") }, "Schedule Report")),
    h("section", { className: "grid metrics" }, [["Reports Generated","48"],["Scheduled","6"],["Shared","14"],["Executive Briefs","12"]].map(([a,b]) => h(Card, { key: a, label: a, value: b, note: "this quarter" }))),
    h("section", { className: "panel" }, h("h2", null, "Report Library"), h("div", { className: "report-card-grid" }, reports.map((r) => h("article", { className: "report-card", key: r.id }, h("button", { onClick: () => setSelected(r) }, h("strong", null, r.title), h("span", null, `${r.type} / ${r.date}`), h("small", null, `${r.status} / ${r.format}`)), h("div", { className: "report-actions" }, ["View","Regenerate","Duplicate"].map((a) => h("button", { key: a, onClick: () => { if (a === "View") setSelected(r); if (a === "Duplicate") setReports([{ ...r, id: `${r.id}-copy`, title: `${r.title} Copy`, status: "Draft" }, ...reports]); toast(`${a} prepared for ${r.title}.`); } }, a))))))),
    create && h("div", { className: "drawer-layer" }, h("button", { className: "scrim", "aria-label": "Close create report", onClick: () => setCreate(false) }), h("section", { className: "modal", role: "dialog", "aria-modal": "true" }, h("h2", null, "Create Report"), h("div", { className: "grid assumptions" }, Object.keys(draft).map((k) => h("label", { className: "field", key: k }, k, h("input", { value: draft[k], onChange: (e) => setDraft({ ...draft, [k]: e.target.value }) })))), h("div", { className: "row" }, h("button", { className: "btn", onClick: () => setCreate(false) }, "Cancel"), h("button", { className: "btn primary", onClick: add }, "Generate Report")))),
    selected && h("div", { className: "drawer-layer" }, h("button", { className: "scrim", "aria-label": "Close report preview", onClick: () => setSelected(null) }), h("aside", { className: "drawer", role: "dialog", "aria-modal": "true" }, h("div", { className: "drawer-head" }, h("h2", null, selected.title), h("button", { className: "x", onClick: () => setSelected(null) }, "X")), h("div", { className: "grid preview-metrics" }, ["type","date","status","format"].map((k) => h("div", { key: k }, h("span", null, k), h("strong", null, selected[k])))), h("p", null, "Executive summary preview using fictional mock data only."))));
}

function Settings({ toast }) {
  const [tab, setTab] = useState("General");
  const [members, setMembers] = useState(membersSeed);
  const [api, setApi] = useState(true);
  const [key, setKey] = useState("wtg_demo_****_9K2A");
  const tabs = ["General", "Team & Roles", "Notifications", "Data & Analytics", "AI Defaults", "Security", "Billing"];
  let content;
  if (tab === "General") {
    content = h("div", { className: "grid settings-grid" }, ["Workspace Name", "Time Zone", "Currency", "Default Start Page"].map((x) => h("label", { className: "field", key: x }, x, h("input", { defaultValue: x === "Workspace Name" ? "WTG Intelligence" : x === "Currency" ? "USD" : x === "Time Zone" ? "Eastern Time" : "Overview" }))));
  } else if (tab === "Team & Roles") {
    content = h("div", { className: "table-wrap" },
      h("button", { className: "btn", onClick: () => { setMembers([...members, { name: "Demo Invitee", role: "Viewer", status: "Invited" }]); toast("Member invited locally."); } }, "Invite Member"),
      h("table", null,
        h("thead", null, h("tr", null, ["Name", "Role", "Status", "Action"].map((x) => h("th", { key: x }, x)))),
        h("tbody", null, members.map((m, i) => h("tr", { key: `${m.name}${i}` },
          h("th", null, m.name),
          h("td", null, h("select", { value: m.role, onChange: (e) => setMembers(members.map((v, n) => n === i ? { ...v, role: e.target.value } : v)) }, ["Owner", "Admin", "Analyst", "Executive Viewer", "Viewer"].map((r) => h("option", { key: r }, r)))),
          h("td", null, m.status),
          h("td", null, h("button", { onClick: () => toast(`${m.name} remove action mocked.`) }, "Remove"))
        )))
      )
    );
  } else if (tab === "Notifications") {
    content = h("div", { className: "grid settings-grid" }, ["Revenue Variance", "Customer Risk", "Forecast Changes", "Scheduled Reports", "Security Alerts"].map((x) => h("article", { className: "setting-card", key: x }, h("h3", null, x), ["In App", "Email", "Slack"].map((c) => h("label", { key: c }, h("input", { type: "checkbox", defaultChecked: c !== "Slack" }), c)))));
  } else if (tab === "Data & Analytics") {
    content = h("div", { className: "grid settings-grid" }, ["Default Reporting Period", "Forecast Horizon", "Refresh Frequency", "Retention Window"].map((x) => h("label", { className: "field", key: x }, x, h("input", { defaultValue: x.includes("Refresh") ? "Every 15 minutes" : x.includes("Retention") ? "90 days" : "Quarter to Date" }))));
  } else if (tab === "AI Defaults") {
    content = h("div", { className: "grid settings-grid" }, ["Insight Sensitivity", "Minimum Confidence", "Brief Style"].map((x) => h("label", { className: "field", key: x }, x, h("input", { defaultValue: x.includes("Confidence") ? "80%" : x.includes("Brief") ? "Executive" : "Medium" }))));
  } else if (tab === "Security") {
    content = h("div", { className: "grid" }, h("label", { className: "field" }, "API Access", h("input", { type: "checkbox", checked: api, onChange: (e) => setApi(e.target.checked) })), h("p", null, `Masked demo key: ${key || "No demo key"}`), h("div", { className: "row" }, h("button", { className: "btn", onClick: () => { setKey("wtg_demo_****_2QZ"); toast("Masked demo key created."); } }, "Create Demo Key"), h("button", { className: "btn", onClick: () => { setKey(""); toast("Demo key revoked."); } }, "Revoke"), h("span", { className: "tag" }, "Audit Logging Enabled")));
  } else {
    content = h("div", { className: "grid" }, h("h3", null, "Intelligence Scale"), h("strong", null, "$299/month"), h("div", { className: "grid settings-grid usage" }, [["Data Records", "8.4M / 10M"], ["Forecast Runs", "842 / 1,000"], ["Team Members", "5 / 10"], ["Scheduled Reports", "6 / 20"]].map(([a, b]) => h("div", { key: a }, h("span", null, a), h("strong", null, b)))), ["Name on Card", "Debit/Credit Card", "Billing Address"].map((x) => h("label", { className: "field", key: x }, x, h("input", { placeholder: x === "Debit/Credit Card" ? "Demo only - do not enter a real card" : "" }))), h("div", { className: "row" }, h("button", { className: "btn primary", onClick: () => toast("Billing update mocked. No payment data was sent.") }, "Submit / Update Billing"), h("button", { className: "btn", onClick: () => toast("Billing information opened locally.") }, "View Billing Information"), h("button", { className: "btn", onClick: () => toast("Deactivate billing action mocked.") }, "Deactivate Billing")));
  }
  return h("div", { className: "grid" },
    h(Header, { title: "Settings", subtitle: "Manage demo workspace preferences, billing, security, and AI defaults." }, h("button", { className: "btn primary", onClick: () => toast("Settings saved locally.") }, "Save Changes")),
    h("div", { className: "tabs", role: "tablist" }, tabs.map((t) => h("button", { key: t, role: "tab", "aria-selected": tab === t, className: tab === t ? "active" : "", onClick: () => setTab(t) }, t))),
    h("section", { className: "panel" }, h("h2", null, tab), content)
  );
}

function CommandMenu({ open, close, nav, toast }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const items = useMemo(() => [...pages.map((p) => ({ label: `Navigate to ${p}`, meta: "Navigate", run: () => nav(p) })), { label: "Ask Intelligence", meta: "Action", run: () => nav("AI Insights") }, { label: "Create Report", meta: "Action", run: () => nav("Reports") }, { label: "Create Scenario", meta: "Action", run: () => nav("Forecasting") }].filter((x) => `${x.label} ${x.meta}`.toLowerCase().includes(q.toLowerCase())), [q, nav]);
  useEffect(() => { if (!open) return; ref.current?.focus(); const onKey = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowDown") { e.preventDefault(); setIdx((v) => Math.min(v + 1, items.length - 1)); } if (e.key === "ArrowUp") { e.preventDefault(); setIdx((v) => Math.max(v - 1, 0)); } if (e.key === "Enter" && items[idx]) { items[idx].run(); close(); toast("Command executed."); } }; document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey); }, [open, items, idx, close, toast]);
  if (!open) return null;
  return h("div", { className: "cmd-layer" }, h("button", { className: "scrim", "aria-label": "Close command menu", onClick: close }), h("section", { className: "cmd", role: "dialog", "aria-modal": "true", "aria-label": "Command menu" }, h("div", { className: "cmd-search" }, h("input", { ref, value: q, onChange: (e) => { setQ(e.target.value); setIdx(0); }, placeholder: "Search commands..." }), h("button", { className: "x", onClick: close }, "X")), items.map((item, i) => h("button", { className: `cmd-item ${i === idx ? "active" : ""}`, key: item.label, onMouseEnter: () => setIdx(i), onClick: () => { item.run(); close(); } }, h("span", null, item.label), h("small", null, item.meta)))));
}

function App() {
  const [page, setPage] = useState("Overview");
  const [toast, setToast] = useState("");
  const [cmd, setCmd] = useState(false);
  const notify = (msg) => { setToast(msg); window.clearTimeout(window.__wtgToast); window.__wtgToast = window.setTimeout(() => setToast(""), 2600); };
  useEffect(() => { const onKey = (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setCmd(true); } if (e.key === "Escape") setCmd(false); }; document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey); }, []);
  const nav = (p) => { setPage(p); notify(`Opened ${p}.`); };
  const view = page === "Overview" ? h(Overview, { toast: notify }) : page === "Forecasting" ? h(Forecasting, { toast: notify }) : page === "AI Insights" ? h(AIInsights, { toast: notify, nav }) : page === "Reports" ? h(Reports, { toast: notify }) : h(Settings, { toast: notify });
  return h("div", { className: "shell" }, h("aside", { className: "side" }, h("div", { className: "brand" }, h("div", { className: "mark" }, "WTG"), h("div", null, h("strong", null, "WTG Intelligence"), h("span", null, "See clearly. Decide faster."))), h("nav", { className: "nav", "aria-label": "Demo navigation" }, pages.map((p) => h("button", { key: p, className: p === page ? "active" : "", onClick: () => nav(p) }, p))), h("div", { className: "foot" }, h("span", null, "WTG Intelligence"), h("strong", null, "Scale Plan"))), h("div", { className: "workspace" }, h("header", { className: "top" }, h("div", { className: "mobile-nav" }, pages.map((p) => h("button", { className: "pill-btn", key: p, onClick: () => nav(p) }, p))), h("button", { className: "search-btn", onClick: () => setCmd(true), "aria-label": "Open command menu" }, h("span", null, "Search intelligence..."), h("kbd", null, "Ctrl K"))), h("main", { className: "main" }, view)), h(CommandMenu, { open: cmd, close: () => setCmd(false), nav, toast: notify }), toast && h("div", { className: "toast", "aria-live": "polite" }, toast));
}

createRoot(document.getElementById("root")).render(h(App));
