import { BadgeDollarSign, CircleDollarSign, LineChart, Percent, Repeat2, TrendingUp } from 'lucide-react';

export const revenueDateRanges = ['This Month', 'Last 30 Days', 'Quarter to Date', 'Year to Date'];
export const businessUnitOptions = ['All Units', 'Enterprise Services', 'Software', 'Consulting', 'Managed Services'];
export const regionOptions = ['All Regions', 'Northeast', 'Southeast', 'Midwest', 'West', 'International'];
export const segmentOptions = ['All Segments', 'Enterprise', 'Mid-Market', 'SMB'];
export const healthOptions = ['All Health', 'Healthy', 'Watch', 'At Risk'];

export const revenueKpis = [
  { label: 'Total Revenue', value: '$8.42M', change: '+18.7%', context: 'quarter to date', tone: 'revenue', Icon: CircleDollarSign, sparkline: 'M0 31 C12 24 19 27 30 18 C42 9 48 13 60 6' },
  { label: 'Recurring Revenue', value: '$5.96M', change: '+21.4%', context: 'subscription and retainers', tone: 'customer', Icon: Repeat2, sparkline: 'M0 25 C10 21 18 22 29 16 C40 11 49 9 60 8' },
  { label: 'Expansion Revenue', value: '$1.14M', change: '+24.9%', context: 'existing accounts', tone: 'ai', Icon: TrendingUp, sparkline: 'M0 34 C9 31 17 24 27 24 C38 24 46 13 60 7' },
  { label: 'Gross Margin', value: '68.4%', change: '+3.2%', context: 'after delivery costs', tone: 'margin', Icon: Percent, sparkline: 'M0 28 C11 24 19 25 30 20 C41 15 49 14 60 9' },
  { label: 'Average Contract Value', value: '$42.8K', change: '+9.1%', context: 'blended ACV', tone: 'forecast', Icon: BadgeDollarSign, sparkline: 'M0 30 C12 28 18 21 29 18 C40 15 50 18 60 10' },
  { label: 'Forecast Variance', value: '+1.9%', change: '+$170K', context: 'projected above target', tone: 'operations', Icon: LineChart, sparkline: 'M0 22 C9 20 16 26 27 20 C39 13 48 13 60 12' },
];

export const revenueTrend = [
  { period: 'Apr', actual: 2.46, forecast: 2.38, prior: 2.11 },
  { period: 'May', actual: 2.58, forecast: 2.47, prior: 2.18 },
  { period: 'Jun', actual: 2.64, forecast: 2.56, prior: 2.24 },
  { period: 'Jul', actual: 2.71, forecast: 2.66, prior: 2.33 },
  { period: 'Aug', actual: 2.84, forecast: 2.76, prior: 2.39 },
  { period: 'Sep', actual: 2.87, forecast: 2.8, prior: 2.44 },
];

export const revenueComposition = [
  { unit: 'Enterprise Services', revenue: 3.54, percent: 42, growth: 24.8, margin: 72.4 },
  { unit: 'Software', revenue: 2.19, percent: 26, growth: 18.1, margin: 81.7 },
  { unit: 'Consulting', revenue: 1.6, percent: 19, growth: 11.7, margin: 58.2 },
  { unit: 'Managed Services', revenue: 1.09, percent: 13, growth: 7.4, margin: 64.9 },
];

export const segmentPerformance = [
  { segment: 'Enterprise', revenue: 5.34, growth: 22.8, acv: '$71.2K', retention: 96.7, expansion: '$812K', margin: 71.2 },
  { segment: 'Mid-Market', revenue: 2.18, growth: 15.6, acv: '$38.4K', retention: 93.9, expansion: '$248K', margin: 66.1 },
  { segment: 'SMB', revenue: 0.9, growth: 8.4, acv: '$14.9K', retention: 89.8, expansion: '$80K', margin: 59.7 },
];

export const regionalPerformance = [
  { region: 'Northeast', revenue: 2.18, growth: 16.9, attainment: 97, customers: 486 },
  { region: 'Southeast', revenue: 1.36, growth: 13.4, attainment: 94, customers: 328 },
  { region: 'Midwest', revenue: 1.42, growth: 11.8, attainment: 91, customers: 371 },
  { region: 'West', revenue: 2.47, growth: 27.6, attainment: 107.2, customers: 512 },
  { region: 'International', revenue: 0.99, growth: 18.2, attainment: 99, customers: 145 },
];

export const growthDrivers = {
  positive: [
    'Enterprise Services contributed 42% of quarter-over-quarter growth.',
    'Expansion revenue increased 24.9%, primarily from existing enterprise accounts.',
    'Western region performance is 7.2% above forecast.',
    'Managed Services margin improved 3.8 points after automation adoption.',
  ],
  risks: [
    'Northeast churn risk is concentrated in healthcare accounts renewing within 60 days.',
    'Consulting utilization pressure is limiting margin expansion.',
  ],
  opportunities: [
    'Bundle Software analytics with Enterprise Services renewals.',
    'Prioritize West region account expansion before quarter close.',
  ],
};

export const customers = [
  {
    id: 'northstar-logistics',
    customer: 'Northstar Logistics',
    segment: 'Enterprise',
    region: 'Northeast',
    businessUnit: 'Enterprise Services',
    revenue: 428000,
    growth: 18.4,
    contractValue: 392000,
    renewalDate: '2026-11-18',
    health: 'Healthy',
    expansion: 36000,
    trend: [58, 62, 66, 69, 72, 76],
    mix: [
      { label: 'Enterprise Services', value: 58 },
      { label: 'Software', value: 27 },
      { label: 'Managed Services', value: 15 },
    ],
    opportunities: ['Expand forecasting workspace to logistics operations', 'Add managed automation support before renewal'],
    activity: ['Executive QBR completed', 'Forecasting pilot converted', 'Renewal review scheduled'],
  },
  {
    id: 'apex-systems-group',
    customer: 'Apex Systems Group',
    segment: 'Enterprise',
    region: 'West',
    businessUnit: 'Software',
    revenue: 386000,
    growth: 24.1,
    contractValue: 344000,
    renewalDate: '2026-12-04',
    health: 'Healthy',
    expansion: 42000,
    trend: [49, 55, 61, 66, 70, 77],
    mix: [
      { label: 'Software', value: 62 },
      { label: 'Enterprise Services', value: 25 },
      { label: 'Consulting', value: 13 },
    ],
    opportunities: ['Add executive reporting seats', 'Cross-sell revenue anomaly detection'],
    activity: ['Expansion signal increased', 'New finance stakeholder added', 'Usage target exceeded'],
  },
  {
    id: 'meridian-health-partners',
    customer: 'Meridian Health Partners',
    segment: 'Enterprise',
    region: 'Northeast',
    businessUnit: 'Consulting',
    revenue: 342000,
    growth: 9.8,
    contractValue: 316000,
    renewalDate: '2026-10-22',
    health: 'Watch',
    expansion: 26000,
    trend: [52, 54, 57, 56, 58, 61],
    mix: [
      { label: 'Consulting', value: 47 },
      { label: 'Software', value: 34 },
      { label: 'Enterprise Services', value: 19 },
    ],
    opportunities: ['Stabilize adoption in northeast accounts', 'Offer renewal incentive tied to automation'],
    activity: ['Support escalation resolved', 'Renewal risk moved to watch', 'Clinical operations report delivered'],
  },
  {
    id: 'brightline-retail',
    customer: 'Brightline Retail',
    segment: 'Mid-Market',
    region: 'Southeast',
    businessUnit: 'Software',
    revenue: 214000,
    growth: 16.2,
    contractValue: 188000,
    renewalDate: '2027-01-15',
    health: 'Healthy',
    expansion: 26000,
    trend: [31, 34, 38, 40, 42, 45],
    mix: [
      { label: 'Software', value: 69 },
      { label: 'Managed Services', value: 21 },
      { label: 'Consulting', value: 10 },
    ],
    opportunities: ['Add store performance dashboard', 'Introduce customer retention package'],
    activity: ['New region onboarded', 'Forecast variance alert accepted', 'Expansion proposal drafted'],
  },
  {
    id: 'cobalt-manufacturing',
    customer: 'Cobalt Manufacturing',
    segment: 'Mid-Market',
    region: 'Midwest',
    businessUnit: 'Managed Services',
    revenue: 196000,
    growth: 7.1,
    contractValue: 178000,
    renewalDate: '2026-09-28',
    health: 'At Risk',
    expansion: 18000,
    trend: [36, 37, 36, 35, 36, 38],
    mix: [
      { label: 'Managed Services', value: 52 },
      { label: 'Consulting', value: 31 },
      { label: 'Software', value: 17 },
    ],
    opportunities: ['Address plant-level adoption gap', 'Package automation services into renewal'],
    activity: ['Renewal risk escalated', 'Usage declined in two facilities', 'Customer success review requested'],
  },
  {
    id: 'vertex-financial',
    customer: 'Vertex Financial',
    segment: 'Enterprise',
    region: 'International',
    businessUnit: 'Enterprise Services',
    revenue: 368000,
    growth: 21.7,
    contractValue: 331000,
    renewalDate: '2027-02-08',
    health: 'Healthy',
    expansion: 37000,
    trend: [45, 50, 54, 60, 64, 70],
    mix: [
      { label: 'Enterprise Services', value: 51 },
      { label: 'Software', value: 36 },
      { label: 'Consulting', value: 13 },
    ],
    opportunities: ['Expand risk analytics into EMEA leadership team', 'Add margin intelligence package'],
    activity: ['International rollout approved', 'Data model refresh completed', 'Expansion meeting booked'],
  },
  {
    id: 'summit-infrastructure',
    customer: 'Summit Infrastructure',
    segment: 'SMB',
    region: 'West',
    businessUnit: 'Consulting',
    revenue: 126000,
    growth: 12.5,
    contractValue: 108000,
    renewalDate: '2026-12-19',
    health: 'Watch',
    expansion: 18000,
    trend: [19, 21, 22, 24, 24, 27],
    mix: [
      { label: 'Consulting', value: 61 },
      { label: 'Software', value: 24 },
      { label: 'Managed Services', value: 15 },
    ],
    opportunities: ['Convert advisory work into recurring analytics retainer', 'Introduce project margin dashboard'],
    activity: ['Procurement review started', 'Consulting milestone completed', 'Champion changed role'],
  },
  {
    id: 'evergreen-media',
    customer: 'Evergreen Media',
    segment: 'SMB',
    region: 'Southeast',
    businessUnit: 'Software',
    revenue: 98000,
    growth: 10.9,
    contractValue: 84000,
    renewalDate: '2027-03-03',
    health: 'Healthy',
    expansion: 14000,
    trend: [15, 16, 18, 18, 20, 22],
    mix: [
      { label: 'Software', value: 73 },
      { label: 'Managed Services', value: 18 },
      { label: 'Consulting', value: 9 },
    ],
    opportunities: ['Add customer cohort reporting', 'Upgrade to quarterly executive review'],
    activity: ['New marketing dashboard adopted', 'Expansion interest captured', 'Health score improved'],
  },
];

export const marginAnalysis = {
  trend: [
    { period: 'Apr', margin: 65.8 },
    { period: 'May', margin: 66.3 },
    { period: 'Jun', margin: 66.9 },
    { period: 'Jul', margin: 67.6 },
    { period: 'Aug', margin: 68.1 },
    { period: 'Sep', margin: 68.4 },
  ],
  byUnit: [
    { label: 'Enterprise Services', value: 72.4 },
    { label: 'Software', value: 81.7 },
    { label: 'Consulting', value: 58.2 },
    { label: 'Managed Services', value: 64.9 },
  ],
  bySegment: [
    { label: 'Enterprise', value: 71.2 },
    { label: 'Mid-Market', value: 66.1 },
    { label: 'SMB', value: 59.7 },
  ],
  costContribution: [
    { label: 'Delivery Labor', value: 42 },
    { label: 'Cloud Infrastructure', value: 27 },
    { label: 'Support Operations', value: 19 },
    { label: 'Partner Services', value: 12 },
  ],
};

export const forecastActual = {
  target: 8.75,
  actual: 8.42,
  projected: 8.92,
  rangeLow: 8.61,
  rangeHigh: 9.24,
  variance: '+$170K',
  confidence: '94%',
};

export const revenueOpportunities = [
  { type: 'Enterprise Expansion', value: '$420K', confidence: '91%', action: 'Prioritize executive expansion plans across top enterprise accounts.' },
  { type: 'Renewal Acceleration', value: '$188K', confidence: '84%', action: 'Pull forward high-fit renewals with multi-year incentives.' },
  { type: 'Cross-Sell Opportunity', value: '$264K', confidence: '88%', action: 'Package Software analytics with Enterprise Services renewals.' },
  { type: 'At-Risk Revenue', value: '$142K', confidence: '79%', action: 'Launch retention motion for Northeast watch-list accounts.' },
];

export const periodComparison = [
  { label: 'Revenue', current: '$8.42M', previous: '$7.09M', variance: '+18.7%' },
  { label: 'Growth', current: '+18.7%', previous: '+13.2%', variance: '+5.5 pts' },
  { label: 'Margin', current: '68.4%', previous: '65.2%', variance: '+3.2 pts' },
  { label: 'New Customers', current: '184', previous: '151', variance: '+33' },
  { label: 'Expansion Revenue', current: '$1.14M', previous: '$912K', variance: '+24.9%' },
];

export const customerSorters = {
  Revenue: (item) => item.revenue,
  Growth: (item) => item.growth,
  'Contract Value': (item) => item.contractValue,
  Health: (item) => ({ Healthy: 3, Watch: 2, 'At Risk': 1 })[item.health],
};
