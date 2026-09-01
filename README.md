# WTG Intelligence

See clearly. Decide faster.

WTG Intelligence is a fictional portfolio/demo product using mock data. It is not a real production analytics company or service.

## Overview

WTG Intelligence is a light enterprise SaaS analytics dashboard concept for executives who need a connected view of revenue, operations, customers, forecasting, and AI-generated business insights.

## Product Concept

The product imagines a decision-intelligence workspace where leadership teams can review performance, understand emerging risks, and generate executive reports from one polished interface.

## Features

- Executive KPI cards for revenue, efficiency, AI savings, forecast accuracy, retention, and gross margin
- Responsive SVG revenue, operating cost, and forecast visualization
- AI-powered Intelligence Brief with actionable opportunity detection
- Ranked business unit performance with target attainment bars
- Operational health score and metric breakdown
- Quarter forecast panel with confidence range and target marker
- Customer intelligence distribution and account health metrics
- Recent executive activity feed
- Quick report list with interactive mock actions
- Responsive sidebar and mobile navigation
- Revenue Analytics workspace with growth, margin, forecast, and customer revenue analysis
- Revenue trend analysis with actual, forecast, and prior-period comparison
- Forecast comparison with target, actual, projected revenue, variance, and confidence band
- Segment performance sorting across revenue, growth, margin, and retention
- Regional performance comparisons with forecast attainment and customer counts
- Customer revenue drilldowns with account detail drawer, service mix, trends, and renewal context
- Margin analysis by business unit, segment, trend, and cost contribution
- Opportunity intelligence for expansion, renewal acceleration, cross-sell, and at-risk revenue
- Operations Analytics workspace for efficiency, capacity, service levels, automation, risk, and improvement planning
- Operational efficiency trend analysis with SLA and automation coverage overlays
- Process performance table with sorting, process drilldowns, bottlenecks, and recommended improvements
- SLA monitoring by operational area with breach counts and trend context
- Automation coverage analysis by process with manual and human-review step breakdowns
- Capacity planning across operations teams with utilization, backlog, projected demand, and staffing risk
- Workload forecasting for near-term demand, peak days, capacity gaps, and automation offsets
- Operational risk intelligence with selectable risk detail and mock action workflows
- Efficiency opportunity intelligence with estimated monthly savings, confidence, effort, and next steps
- Customer Intelligence workspace for health scoring, retention risk, expansion potential, lifecycle behavior, and account-level AI briefs
- Customer health distribution and health trend analysis across healthy, watch, and at-risk accounts
- Customer segment performance with retention, NRR, expansion, health score, and churn risk
- Searchable customer portfolio with lifecycle, region, health, expansion potential, and owner context
- Customer detail drawer with revenue trend, engagement trend, adoption, support activity, timeline, renewal details, expansion opportunities, and risk signals
- Account-level AI customer brief with observations, recommended next action, and mock follow-up actions
- Churn-risk intelligence with selectable risk detail, contributing signals, and retention plan actions
- Expansion opportunity sorting by value or confidence
- Customer lifecycle, cohort analysis, retention analytics, adoption intelligence, and experience metrics
- Forecasting workspace for projected performance, confidence ranges, target pacing, scenarios, assumptions, and AI explanations
- Revenue forecasting with historical actuals, projected lines, targets, and confidence bands
- Target pacing with revenue to date, expected remaining revenue, required run rate, and projected run rate
- Forecast variance drivers with selectable detail, supporting signals, and cross-page actions
- Scenario planning across base, upside, downside, and locally created scenarios
- Editable forecast assumptions with reset and apply interactions
- Forecast risks, upside opportunities, customer outlook, operational outlook, and model accuracy reporting
- AI forecast explanation panel with variance, follow-up, and executive brief actions
- AI Insights workspace with prioritized insight feed, explainability panel, recommendations, saved prompts, executive brief, and decision log
- Reports workspace with report library, preview panel, templates, create flow, schedule flow, export actions, and activity
- Settings workspace with editable demo preferences, team roles, notifications, analytics defaults, AI defaults, security, masked demo keys, and billing usage
- Global command menu with Ctrl+K / Cmd+K, workspace navigation, searchable reports, insights, saved questions, and create actions

## Product Areas

- Overview
- Revenue
- Operations
- Customers
- Forecasting
- AI Insights
- Reports
- Settings

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- lucide-react

## Architecture

```text
src/
  components/
    customers/
    forecasting/
    insights/
    overview/
    operations/
    platform/
    revenue/
  data/
    customersData.js
    forecastingData.js
    overviewData.js
    operationsData.js
    revenueData.js
    workspaceData.js
  layouts/
    DashboardLayout.jsx
  pages/
    Customers.jsx
    Forecasting.jsx
    AIInsights.jsx
    Overview.jsx
    Operations.jsx
    Reports.jsx
    Revenue.jsx
    Settings.jsx
  styles/
    global.css
  App.jsx
  main.jsx
```

The dashboard uses a dedicated mock data module and reusable overview components so future pages can be added without turning the app into a single large screen component.

Revenue Analytics extends the initial executive overview with its own page-level data model and focused components for trend analysis, revenue composition, segment performance, regional performance, customer drilldowns, margin analysis, forecast variance, and opportunity intelligence.

Operations Analytics adds a distinct operational workspace with client-side data for efficiency trends, process performance, SLA monitoring, automation coverage, team capacity, workload forecasting, risk intelligence, bottleneck analysis, and efficiency opportunities.

Customer Intelligence adds a relationship-focused workspace with client-side data for portfolio health, churn risk, expansion opportunities, lifecycle movement, retention and renewal analytics, cohort performance, product adoption, customer experience, and account-level AI briefs.

Forecasting adds a strategic planning workspace with client-side scenario modeling, editable assumptions, target pacing, forecast confidence, variance drivers, business-unit forecasts, customer and operational outlooks, risk/opportunity analysis, forecast change history, and fictional model performance metrics.

AI Insights, Reports, and Settings complete the product shell with cross-workspace recommendations, a local executive brief flow, report management, configurable demo settings, and a keyboard-accessible command menu.

## Accessibility

- Semantic landmarks for navigation, header, and main content
- Proper heading hierarchy across dashboard sections
- Keyboard-accessible sidebar, chart interaction zones, selectors, and actions
- Visible focus states
- Accessible chart summary and point labels
- `aria-live` feedback for mock dashboard actions
- Text status labels beyond color-only indicators
- Keyboard-accessible customer drawer with Escape-to-close behavior
- Labeled revenue filters, search controls, and sortable table controls
- Keyboard-accessible process drawer with Escape-to-close behavior
- Labeled operations filters and sortable operational tables
- Selectable risk cards with text-based severity and detailed recommendations
- Keyboard-accessible customer intelligence drawer with Escape-to-close behavior
- Labeled customer filters, search controls, and sortable portfolio tables
- Churn-risk cards use text labels in addition to severity color
- Keyboard-accessible scenario creation dialog with Escape-to-close behavior
- Labeled assumption inputs, scenario controls, forecast filters, and chart interaction zones
- Scenario and driver selections expose text labels in addition to visual state
- Keyboard-accessible command menu with Escape close, arrow-key selection, and Enter activation
- Labeled report, schedule, settings, notification, and AI prompt controls
- Reduced-motion support via `prefers-reduced-motion`

## Responsive Design

The layout supports desktop, laptop, tablet, and mobile breakpoints. KPI cards collapse from six columns to three columns and then one column. Dashboard panels move from executive grid layouts into single-column mobile sections, and the chart remains readable on small screens.

Revenue tables are contained in responsive scroll regions, filter controls collapse into compact mobile stacks, and the customer detail drawer becomes full-width on small screens.

Operations tables use the same responsive scroll pattern, operational filters collapse into mobile-friendly controls, and process drilldowns use a full-width drawer on small screens.

Customer portfolio and cohort tables use responsive scroll regions, customer filters wrap cleanly, and the account detail drawer becomes full-width on mobile.

Forecast scenario cards, assumption controls, and comparison panels collapse from dense desktop grids into mobile single-column layouts. Forecast tables remain in responsive scroll regions.

AI Insights, Reports, Settings, and the command menu reuse the same responsive grid, scroll, drawer, modal, and control patterns so all product areas remain usable on desktop, tablet, and mobile.

## Local Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Screenshots

Screenshots are intentionally not fabricated. Add verified captures to `docs/screenshots/` as the design evolves.

## CodePen

The dashboard is structured for a later CodePen-compatible interactive UI demo. A future CodePen version can consolidate the React components, mock data, and CSS into a portable prototype.

## Dribbble

This project is designed to support a Dribbble UI/UX case study focused on a premium, light enterprise analytics dashboard with executive information density and polished data visualization.

## Roadmap

- Deepen Revenue workspace with saved views and export flows
- Add Revenue workspace screenshot set
- Add Operations workspace screenshot set
- Deepen Operations drilldowns with workflow simulation states
- Add Customer Intelligence screenshot set
- Deepen customer health and retention workflow states
- Add Forecasting workspace screenshot set
- Deepen forecasting scenarios with saved views and richer assumption sensitivity
- Add AI Insights, Reports, and Settings screenshot set
- Package a CodePen-compatible single-screen demo
- Capture production-quality screenshots

## Portfolio Disclaimer

WTG Intelligence is a fictional enterprise analytics portfolio/demo product built with mock data. It does not represent a real company, production service, customer dataset, machine learning model, AI system, billing system, or security implementation.
