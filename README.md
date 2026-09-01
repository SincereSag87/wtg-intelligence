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
  data/
    overviewData.js
  layouts/
    DashboardLayout.jsx
  pages/
    Overview.jsx
  styles/
    global.css
  App.jsx
  main.jsx
```

The dashboard uses a dedicated mock data module and reusable overview components so future pages can be added without turning the app into a single large screen component.

## Accessibility

- Semantic landmarks for navigation, header, and main content
- Proper heading hierarchy across dashboard sections
- Keyboard-accessible sidebar, chart interaction zones, selectors, and actions
- Visible focus states
- Accessible chart summary and point labels
- `aria-live` feedback for mock dashboard actions
- Text status labels beyond color-only indicators

## Responsive Design

The layout supports desktop, laptop, tablet, and mobile breakpoints. KPI cards collapse from six columns to three columns and then one column. Dashboard panels move from executive grid layouts into single-column mobile sections, and the chart remains readable on small screens.

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

- Build full Revenue workspace
- Add Operations drilldowns
- Add Customers cohort and risk views
- Expand Forecasting scenarios
- Create AI Insights workspace with prompt history
- Add report export mock flow
- Capture production-quality screenshots
