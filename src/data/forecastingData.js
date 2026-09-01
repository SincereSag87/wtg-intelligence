import { BadgeDollarSign, Gauge, LineChart, Percent, Target, UsersRound } from 'lucide-react';

export const forecastHorizons = ['30 Days', 'Quarter', '6 Months', '12 Months'];
export const scenarioNames = ['Base Case', 'Upside', 'Downside'];
export const forecastBusinessUnits = ['All Units', 'Enterprise Services', 'Software', 'Consulting', 'Managed Services'];
export const forecastRegions = ['All Regions', 'Northeast', 'Southeast', 'Midwest', 'West', 'International'];

export const baselineAssumptions = {
  revenueGrowth: 8.4,
  customerRetention: 94.8,
  expansionRate: 14.2,
  grossMargin: 68.4,
  operatingCostGrowth: 5.1,
  automationImprovement: 6.8,
  customerGrowth: 6.4,
};

export const scenarioData = {
  'Base Case': {
    revenue: 8.92,
    margin: 69.1,
    confidence: 94,
    customerGrowth: 6.4,
    retention: 95.2,
    capacity: 89,
    riskExposure: 384,
    range: [8.61, 9.24],
  },
  Upside: {
    revenue: 9.48,
    margin: 70.4,
    confidence: 72,
    customerGrowth: 8.7,
    retention: 96.1,
    capacity: 91,
    riskExposure: 248,
    range: [9.08, 9.82],
  },
  Downside: {
    revenue: 8.14,
    margin: 66.8,
    confidence: 81,
    customerGrowth: 3.1,
    retention: 92.9,
    capacity: 96,
    riskExposure: 612,
    range: [7.86, 8.42],
  },
};

export const forecastKpis = [
  { label: 'Projected Revenue', key: 'revenue', suffix: 'M', value: '$8.92M', change: '+1.9% vs target', context: 'quarter projection', tone: 'revenue', Icon: BadgeDollarSign, sparkline: 'M0 31 C10 26 18 27 30 18 C42 10 49 13 60 7' },
  { label: 'Forecast Confidence', key: 'confidence', suffix: '%', value: '94%', change: 'High', context: 'model confidence', tone: 'forecast', Icon: LineChart, sparkline: 'M0 18 C12 16 18 20 29 17 C41 13 50 11 60 10' },
  { label: 'Target Attainment', key: 'attainment', suffix: '%', value: '101.9%', change: '+1.9%', context: 'projected vs target', tone: 'operations', Icon: Target, sparkline: 'M0 24 C9 22 18 23 29 18 C41 14 50 13 60 9' },
  { label: 'Projected Gross Margin', key: 'margin', suffix: '%', value: '69.1%', change: '+0.7 pts', context: 'forecasted margin', tone: 'margin', Icon: Percent, sparkline: 'M0 29 C11 25 18 26 29 20 C40 15 49 14 60 9' },
  { label: 'Expected Customer Growth', key: 'customerGrowth', suffix: '%', value: '+6.4%', change: '+126 customers', context: 'active customer base', tone: 'customer', Icon: UsersRound, sparkline: 'M0 28 C10 23 18 25 30 19 C42 13 50 13 60 8' },
  { label: 'Risk-Adjusted Forecast', key: 'riskAdjusted', suffix: 'M', value: '$8.74M', change: '-$180K risk', context: 'after downside weighting', tone: 'ai', Icon: Gauge, sparkline: 'M0 23 C10 21 18 26 29 21 C40 16 49 15 60 12' },
];

export const forecastTimelinePoints = [
  { label: 'Apr', actual: 2.46, forecast: null, target: 2.4, low: null, high: null },
  { label: 'May', actual: 2.58, forecast: null, target: 2.55, low: null, high: null },
  { label: 'Jun', actual: 2.64, forecast: null, target: 2.7, low: null, high: null },
  { label: 'Jul', actual: 2.71, forecast: 2.71, target: 2.85, low: 2.64, high: 2.78 },
  { label: 'Aug', actual: null, forecast: 2.84, target: 2.95, low: 2.72, high: 2.96 },
  { label: 'Sep', actual: null, forecast: 2.96, target: 3.0, low: 2.84, high: 3.08 },
  { label: 'Oct', actual: null, forecast: 3.12, target: 3.05, low: 2.98, high: 3.28 },
];

export const targetPacing = {
  target: 8.75,
  toDate: 6.31,
  remaining: 2.61,
  finish: 8.92,
  pacing: 'Above Plan',
  requiredRunRate: '$820K/mo',
  projectedRunRate: '$870K/mo',
};

export const forecastDrivers = [
  { id: 'enterprise-expansion', label: 'Enterprise Expansion', impact: 284, confidence: 91, category: 'Positive', trend: '+18%', area: 'Enterprise Customers', horizon: 'Current Quarter', why: 'Expansion pipeline conversion is trending above the historical baseline.', signals: ['expansion pipeline +18%', 'high-confidence accounts +12%', 'enterprise health score +4 pts'] },
  { id: 'retention-improvement', label: 'Retention Improvement', impact: 142, confidence: 88, category: 'Positive', trend: '+4 pts', area: 'Customer Portfolio', horizon: 'Current Quarter', why: 'Renewal risk declined as account health improved in enterprise and mid-market cohorts.', signals: ['retention 94.8%', 'accounts at risk -8', 'renewal confidence +6 pts'] },
  { id: 'western-growth', label: 'Western Region Growth', impact: 116, confidence: 86, category: 'Positive', trend: '+7.2%', area: 'West Region', horizon: 'Current Quarter', why: 'Western region pipeline is converting ahead of plan with strong software demand.', signals: ['West forecast attainment 107.2%', 'pipeline velocity +9%', 'enterprise expansion +11%'] },
  { id: 'automation-savings', label: 'Automation Savings', impact: 74, confidence: 84, category: 'Positive', trend: '+6.8%', area: 'Operations', horizon: 'Current Quarter', why: 'Automation improvements are reducing operating cost pressure.', signals: ['automation coverage 78.2%', 'cycle time -14.2%', 'SLA 96.4%'] },
  { id: 'churn-risk', label: 'Churn Risk', impact: -118, confidence: 79, category: 'Negative', trend: '-$118K', area: 'At-Risk Accounts', horizon: 'Next 75 Days', why: 'A small set of renewals carries elevated support and engagement risk.', signals: ['Cobalt risk high', 'Atlas risk high', 'renewal risk $384K'] },
  { id: 'delayed-contracts', label: 'Delayed Contracts', impact: -82, confidence: 76, category: 'Negative', trend: '-6 deals', area: 'Sales Operations', horizon: 'Current Quarter', why: 'Contract review bottlenecks may defer expansion bookings.', signals: ['contract review cycle 7.2 hrs', 'manual approvals +24%', 'delayed expansion decisions'] },
  { id: 'capacity-constraints', label: 'Capacity Constraints', impact: -54, confidence: 81, category: 'Negative', trend: '-3.8%', area: 'Customer Operations', horizon: '48 Hours', why: 'Customer Operations utilization may pressure SLA performance late in the quarter.', signals: ['projected utilization 89%', 'capacity gap -3.8%', 'workload +12.4%'] },
];

export const confidenceBreakdown = [
  { label: 'Revenue History Quality', value: 98, effect: 'Increases confidence' },
  { label: 'Pipeline Reliability', value: 91, effect: 'Increases confidence' },
  { label: 'Customer Retention Stability', value: 94, effect: 'Increases confidence' },
  { label: 'Operational Capacity', value: 88, effect: 'Moderates confidence' },
  { label: 'Market Variability', value: 82, effect: 'Decreases confidence' },
];

export const revenueForecast = [
  { unit: 'Enterprise Services', forecast: 3.42, target: 3.2, variance: '+$220K', confidence: 92, growth: '+24.8%' },
  { unit: 'Software', forecast: 2.31, target: 2.22, variance: '+$90K', confidence: 89, growth: '+18.1%' },
  { unit: 'Consulting', forecast: 1.84, target: 1.88, variance: '-$40K', confidence: 82, growth: '+11.7%' },
  { unit: 'Managed Services', forecast: 1.35, target: 1.45, variance: '-$100K', confidence: 80, growth: '+7.4%' },
];

export const customerForecast = [
  { label: 'Projected Active Customers', value: '1,968' },
  { label: 'Expected New Customers', value: '142' },
  { label: 'Expected Churn', value: '31' },
  { label: 'Projected Retention', value: '95.2%' },
  { label: 'Projected Expansion Revenue', value: '$1.28M' },
];

export const operationsForecast = [
  { label: 'Projected Workload', value: '+12.4%' },
  { label: 'Projected Utilization', value: '89%' },
  { label: 'Capacity Gap', value: '-3.8%' },
  { label: 'Automation Offset', value: '+8.6%' },
  { label: 'SLA Forecast', value: '95.8%' },
];

export const forecastRisks = [
  { title: 'Enterprise Renewal Concentration', impact: '-$164K', probability: '34%', horizon: 'Current Quarter', mitigation: 'Prioritize executive renewal reviews', confidence: '82%' },
  { title: 'Customer Operations Capacity', impact: '-$92K', probability: '41%', horizon: 'Next 30 Days', mitigation: 'Increase automation before peak volume', confidence: '88%' },
  { title: 'Delayed Expansion Decisions', impact: '-$126K', probability: '29%', horizon: 'Current Quarter', mitigation: 'Escalate contract approval queue', confidence: '76%' },
  { title: 'Market Softening', impact: '-$88K', probability: '24%', horizon: '6 Months', mitigation: 'Shift pipeline focus to resilient verticals', confidence: '69%' },
];

export const forecastOpportunities = [
  { title: 'Enterprise Expansion Acceleration', upside: '+$240K', confidence: '84%', timing: 'Current Quarter' },
  { title: 'Automation Capacity Unlock', upside: '+$118K', confidence: '81%', timing: 'Next 30 Days' },
  { title: 'Improved Retention', upside: '+$174K', confidence: '86%', timing: 'Current Quarter' },
  { title: 'Western Region Growth', upside: '+$146K', confidence: '79%', timing: '6 Months' },
];

export const forecastChanges = [
  { when: 'Today', change: 'Forecast increased +$86K', source: 'WTG forecast engine', impact: '+1.0%' },
  { when: '2 days ago', change: 'Retention assumption increased', source: 'Customer Intelligence', impact: '+$42K' },
  { when: '5 days ago', change: 'Capacity risk added', source: 'Operations Analytics', impact: '-$54K' },
  { when: '1 week ago', change: 'Enterprise expansion forecast increased', source: 'Revenue Analytics', impact: '+$118K' },
];

export const modelPerformance = {
  current: '96.2%',
  lastQuarter: '94.8%',
  last4Quarters: '95.1%',
  history: [
    { quarter: 'Q4 2025', forecast: 7.12, actual: 7.02, variance: '1.4%' },
    { quarter: 'Q1 2026', forecast: 7.48, actual: 7.62, variance: '1.8%' },
    { quarter: 'Q2 2026', forecast: 8.04, actual: 7.91, variance: '1.6%' },
    { quarter: 'Q3 2026', forecast: 8.74, actual: 8.42, variance: '3.8%' },
  ],
  categories: [
    { label: 'Revenue', value: 96.2 },
    { label: 'Customer Growth', value: 94.4 },
    { label: 'Retention', value: 95.8 },
    { label: 'Operating Cost', value: 92.6 },
    { label: 'Capacity', value: 90.8 },
  ],
};

export const forecastComparisons = [
  { label: 'Base vs Upside', revenue: '+$560K', margin: '+1.3 pts', risk: '-$136K' },
  { label: 'Base vs Downside', revenue: '-$780K', margin: '-2.3 pts', risk: '+$228K' },
  { label: 'Current vs Previous Forecast', revenue: '+$86K', margin: '+0.2 pts', risk: '-$34K' },
  { label: 'Forecast vs Target', revenue: '+$170K', margin: '+0.7 pts', risk: 'Manageable' },
];
