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
    overview/
    operations/
    revenue/
  data/
    overviewData.js
    operationsData.js
    revenueData.js
  layouts/
    DashboardLayout.jsx
  pages/
    Overview.jsx
    Operations.jsx
    Revenue.jsx
  styles/
    global.css
  App.jsx
  main.jsx
```

The dashboard uses a dedicated mock data module and reusable overview components so future pages can be added without turning the app into a single large screen component.

Revenue Analytics extends the initial executive overview with its own page-level data model and focused components for trend analysis, revenue composition, segment performance, regional performance, customer drilldowns, margin analysis, forecast variance, and opportunity intelligence.

Operations Analytics adds a distinct operational workspace with client-side data for efficiency trends, process performance, SLA monitoring, automation coverage, team capacity, workload forecasting, risk intelligence, bottleneck analysis, and efficiency opportunities.

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

## Responsive Design

The layout supports desktop, laptop, tablet, and mobile breakpoints. KPI cards collapse from six columns to three columns and then one column. Dashboard panels move from executive grid layouts into single-column mobile sections, and the chart remains readable on small screens.

Revenue tables are contained in responsive scroll regions, filter controls collapse into compact mobile stacks, and the customer detail drawer becomes full-width on small screens.

Operations tables use the same responsive scroll pattern, operational filters collapse into mobile-friendly controls, and process drilldowns use a full-width drawer on small screens.

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
- Add Customers cohort and risk views
- Expand Forecasting scenarios
- Create AI Insights workspace with prompt history
- Add report export mock flow
- Capture production-quality screenshots
