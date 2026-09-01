export const insights = [
  { id: 'enterprise-expansion', title: 'Enterprise Expansion Acceleration', area: 'Revenue', priority: 'High', impact: '+$284K', confidence: '91%', entity: 'Enterprise Services', detected: '12 min ago', explanation: 'Expansion pipeline conversion is trending above the historical baseline.', signals: ['expansion pipeline +18%', 'enterprise health +4 pts', 'renewal confidence +6 pts'], actions: ['prioritize expansion conversations', 'review high-confidence accounts', 'align sales capacity'] },
  { id: 'capacity-risk', title: 'Customer Operations Capacity Risk', area: 'Operations', priority: 'Critical', impact: '-$92K', confidence: '88%', entity: 'Customer Operations', detected: '18 min ago', explanation: 'Projected workload may exceed staffing capacity before peak demand.', signals: ['task volume +18%', 'staff availability -6%', 'manual review queue +24%'], actions: ['increase automation coverage', 'rebalance workload', 'protect high-value account queues'] },
  { id: 'northstar-expansion', title: 'Northstar Expansion Opportunity', area: 'Customers', priority: 'High', impact: '+$84K', confidence: '92%', entity: 'Northstar Logistics', detected: '31 min ago', explanation: 'Adoption and engagement signals indicate a timely expansion window.', signals: ['usage +14%', 'support volume -18%', 'two under-adopted services'], actions: ['schedule expansion review', 'bundle AI Insights', 'prepare executive account brief'] },
  { id: 'forecast-confidence', title: 'Forecast Confidence Increased', area: 'Forecasting', priority: 'Medium', impact: '+2.4 pts', confidence: '94%', entity: 'Quarter Forecast', detected: '44 min ago', explanation: 'Pipeline reliability and retention stability improved model confidence.', signals: ['pipeline reliability 91%', 'retention stability 94%', 'forecast accuracy 96.2%'], actions: ['explain variance', 'review forecast drivers', 'share executive brief'] },
  { id: 'retention-risk-reduced', title: 'Retention Risk Reduced', area: 'Customers', priority: 'Medium', impact: '$148K protected', confidence: '86%', entity: 'Renewal Portfolio', detected: '1 hr ago', explanation: 'Recent success activity reduced modeled churn exposure.', signals: ['accounts at risk -8', 'customer retention 94.8%', 'renewal confidence +6 pts'], actions: ['update renewal plan', 'review watch accounts', 'log retention decision'] },
];

export const recommendations = [
  { title: 'Accelerate Enterprise Expansion', impact: '+$284K', confidence: '91%', effort: 'Medium', area: 'Revenue', owner: 'Sales Leadership' },
  { title: 'Increase Customer Operations Automation', impact: '+$118K', confidence: '88%', effort: 'Medium', area: 'Operations', owner: 'Operations' },
  { title: 'Launch At-Risk Renewal Outreach', impact: '$164K protected', confidence: '84%', effort: 'Low', area: 'Customers', owner: 'Customer Success' },
  { title: 'Prioritize Western Region Pipeline', impact: '+$146K', confidence: '79%', effort: 'Low', area: 'Forecasting', owner: 'Revenue Operations' },
];

export const savedQuestions = [
  'What is driving revenue growth?',
  'Which customers are most at risk?',
  'Where are operational bottlenecks increasing?',
  'What could cause us to miss forecast?',
  'Where is the strongest expansion opportunity?',
];

export const decisionLogSeed = [
  { id: 'automation', title: 'Increase Customer Operations Automation', decision: 'Approved', owner: 'Operations', impact: '$118K', area: 'Operations', date: 'Sep 1, 2026' },
  { id: 'enterprise', title: 'Prioritize Enterprise Expansion', decision: 'In Review', owner: 'Sales Leadership', impact: '$284K', area: 'Revenue', date: 'Sep 1, 2026' },
  { id: 'hiring', title: 'Delay Managed Services Hiring', decision: 'Deferred', owner: 'Finance', impact: '$72K', area: 'Operations', date: 'Aug 31, 2026' },
];

export const reports = [
  { id: 'executive-performance', title: 'Executive Performance', type: 'Executive', period: 'Quarter to Date', generated: '18 min ago', owner: 'Raymond Wannamaker', status: 'Completed', format: 'Executive Summary', sections: ['Overview', 'Revenue', 'Operations', 'Customers'], metrics: ['$8.42M revenue', '92.7% efficiency', '94.8% retention'], summary: 'Business performance remains above plan with revenue, retention, and efficiency trending positively.' },
  { id: 'revenue-analysis', title: 'Revenue Analysis', type: 'Revenue', period: 'Quarter to Date', generated: 'Aug 29, 2026', owner: 'Maya Chen', status: 'Completed', format: 'PDF', sections: ['Revenue trend', 'Segments', 'Forecast variance'], metrics: ['$8.42M revenue', '+18.7% growth', '68.4% margin'], summary: 'Enterprise Services and Software continue to lead growth while consulting margin remains the primary watch area.' },
  { id: 'operations-summary', title: 'Operations Summary', type: 'Operations', period: 'Last 30 Days', generated: 'Aug 28, 2026', owner: 'Jordan Lee', status: 'Scheduled', format: 'PDF', sections: ['SLA', 'Automation', 'Capacity'], metrics: ['96.4% SLA', '78.2% automation', '7 open risks'], summary: 'Operational health is strong, with customer operations capacity requiring near-term attention.' },
  { id: 'customer-health', title: 'Customer Health', type: 'Customers', period: 'Quarter to Date', generated: 'Aug 26, 2026', owner: 'Elena Rodriguez', status: 'Completed', format: 'CSV', sections: ['Health distribution', 'Churn risk', 'Expansion'], metrics: ['1,842 customers', '24 at risk', '$1.14M expansion'], summary: 'Portfolio health improved as expansion signals increased and at-risk accounts declined.' },
  { id: 'forecast-review', title: 'Forecast Review', type: 'Forecasting', period: 'Quarter', generated: 'Aug 25, 2026', owner: 'Raymond Wannamaker', status: 'In Review', format: 'Executive Summary', sections: ['Scenario planning', 'Drivers', 'Risks'], metrics: ['$8.92M projected', '94% confidence', '+$170K variance'], summary: 'The base forecast remains above target with capacity pressure as the main downside risk.' },
  { id: 'ai-insight-brief', title: 'AI Insight Brief', type: 'AI Insights', period: 'Last 7 Days', generated: '42 min ago', owner: 'WTG Intelligence', status: 'Draft', format: 'Executive Summary', sections: ['Insights', 'Recommendations', 'Decisions'], metrics: ['18 active insights', '5 high priority', '$1.84M impact'], summary: 'Enterprise expansion and automation remain the highest-value leadership focus areas.' },
  { id: 'board-summary', title: 'Board Summary', type: 'Board', period: 'Quarter to Date', generated: 'Sep 1, 2026', owner: 'Raymond Wannamaker', status: 'Scheduled', format: 'Presentation Summary', sections: ['Executive summary', 'Forecast', 'Risks'], metrics: ['101.9% target attainment', '112.4% NRR', '96.2% accuracy'], summary: 'Board-level metrics show above-plan performance and high confidence in the current quarter forecast.' },
];

export const reportTemplates = ['Weekly Executive Brief', 'Monthly Revenue Review', 'Operations Health Review', 'Customer Risk Review', 'Quarterly Forecast Review', 'Board Intelligence Pack'];
export const reportActivity = [
  { title: 'Report generated', detail: 'Executive Performance', time: '18 min ago' },
  { title: 'Report scheduled', detail: 'Weekly Executive Brief', time: '42 min ago' },
  { title: 'Report shared', detail: 'Customer Health', time: '1 hr ago' },
];

export const settingsDefaults = {
  workspaceName: 'WTG Intelligence',
  workspaceId: 'wtg-intelligence',
  timeZone: 'Eastern Time',
  currency: 'USD',
  fiscalStart: 'January',
  startPage: 'Overview',
  appearance: 'Light',
  reportingPeriod: 'Quarter to Date',
  forecastHorizon: 'Quarter',
  refreshFrequency: 'Every 15 minutes',
  retentionWindow: '90 days',
  benchmarkComparison: 'Enabled',
  anomalySensitivity: 'Medium',
  insightSensitivity: 'Medium',
  minimumConfidence: 80,
  briefStyle: 'Executive',
  recommendationThreshold: 'Medium Impact',
  promptHistory: 'Enabled',
  dailyBrief: 'Disabled',
};

export const teamMembers = [
  { name: 'Raymond Wannamaker', role: 'Owner', status: 'Active' },
  { name: 'Maya Chen', role: 'Admin', status: 'Active' },
  { name: 'Jordan Lee', role: 'Analyst', status: 'Active' },
  { name: 'Elena Rodriguez', role: 'Executive Viewer', status: 'Active' },
  { name: 'Noah Carter', role: 'Viewer', status: 'Invited' },
];

export const notificationCategories = ['Revenue Variance', 'SLA Risk', 'Customer Churn Risk', 'Forecast Change', 'Critical AI Insight', 'Scheduled Reports', 'Security Alerts'];
export const planUsage = [
  { label: 'Data Records', value: '8.4M / 10M', percent: 84 },
  { label: 'Forecast Runs', value: '842 / 1,000', percent: 84 },
  { label: 'Team Members', value: '5 / 10', percent: 50 },
  { label: 'Scheduled Reports', value: '6 / 20', percent: 30 },
];
