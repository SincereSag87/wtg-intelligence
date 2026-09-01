import { AlertTriangle, Bot, Clock3, Gauge, ListChecks, ShieldCheck } from 'lucide-react';

export const operationsDateRanges = ['Today', 'Last 7 Days', 'Last 30 Days', 'Quarter to Date'];
export const operationsBusinessUnits = ['All Units', 'Enterprise Services', 'Software', 'Consulting', 'Managed Services'];
export const operationsTeams = ['All Teams', 'Customer Operations', 'Finance Operations', 'Sales Operations', 'Security', 'Platform Operations'];
export const operationsRegions = ['All Regions', 'Northeast', 'Southeast', 'Midwest', 'West', 'International'];
export const operationsProcesses = ['All Processes', 'Customer Onboarding', 'Invoice Processing', 'Support Resolution', 'Contract Review', 'Lead Qualification', 'Security Triage'];

export const operationsKpis = [
  { label: 'Operational Efficiency', value: '92.7%', change: '+4.2%', context: 'weighted process score', tone: 'operations', Icon: Gauge, sparkline: 'M0 27 C12 23 19 25 30 18 C41 12 49 12 60 8' },
  { label: 'SLA Attainment', value: '96.4%', change: '+1.8%', context: 'within committed service levels', tone: 'customer', Icon: ShieldCheck, sparkline: 'M0 19 C11 18 18 20 29 17 C41 14 50 11 60 10' },
  { label: 'Automation Coverage', value: '78.2%', change: '+6.4%', context: 'eligible workflow steps', tone: 'ai', Icon: Bot, sparkline: 'M0 32 C9 27 17 30 28 22 C39 14 49 13 60 7' },
  { label: 'Average Cycle Time', value: '4.8 hrs', change: '-14.2%', context: 'faster than prior period', tone: 'forecast', Icon: Clock3, sparkline: 'M0 10 C11 15 18 14 30 20 C42 25 50 27 60 31' },
  { label: 'Team Utilization', value: '84.1%', change: '+2.7%', context: 'balanced operating load', tone: 'revenue', Icon: ListChecks, sparkline: 'M0 26 C10 21 18 25 30 19 C41 14 50 16 60 11' },
  { label: 'Open Risks', value: '7', change: '-3', context: 'active operational risks', tone: 'margin', Icon: AlertTriangle, sparkline: 'M0 12 C9 16 18 15 29 21 C40 27 49 25 60 30' },
];

export const efficiencyTrend = [
  { period: 'W1', efficiency: 88.2, sla: 94.3, automation: 71.4 },
  { period: 'W2', efficiency: 89.4, sla: 95.1, automation: 72.8 },
  { period: 'W3', efficiency: 90.1, sla: 95.8, automation: 74.5 },
  { period: 'W4', efficiency: 91.3, sla: 96.0, automation: 75.6 },
  { period: 'W5', efficiency: 91.9, sla: 96.2, automation: 77.1 },
  { period: 'W6', efficiency: 92.7, sla: 96.4, automation: 78.2 },
];

export const processPerformance = [
  {
    process: 'Customer Onboarding',
    team: 'Customer Operations',
    region: 'Northeast',
    businessUnit: 'Enterprise Services',
    volume: 4842,
    cycleTime: 3.6,
    sla: 97.8,
    automation: 84,
    errorRate: 1.9,
    efficiency: 94,
    trend: [4.4, 4.1, 3.9, 3.7, 3.6],
    steps: [
      { label: 'Customer Verification', percent: 32 },
      { label: 'Data Mapping', percent: 24 },
      { label: 'Provisioning', percent: 21 },
      { label: 'Executive Handoff', percent: 23 },
    ],
    bottlenecks: ['Customer verification queues average 4.8 hours', 'Data mapping needs additional automation coverage'],
    opportunities: ['Automate identity verification checks', 'Pre-fill onboarding package from CRM records'],
    incidents: ['Verification delay alert opened 38 min ago', 'Enterprise handoff SLA recovered yesterday'],
    improvements: ['Rebalance verification queue to Platform Operations', 'Prioritize high-value account provisioning'],
  },
  {
    process: 'Invoice Processing',
    team: 'Finance Operations',
    region: 'Southeast',
    businessUnit: 'Managed Services',
    volume: 7210,
    cycleTime: 2.1,
    sla: 96.1,
    automation: 91,
    errorRate: 1.2,
    efficiency: 96,
    trend: [2.8, 2.6, 2.4, 2.2, 2.1],
    steps: [
      { label: 'Invoice Intake', percent: 28 },
      { label: 'Exception Review', percent: 19 },
      { label: 'Approval Routing', percent: 31 },
      { label: 'Payment Sync', percent: 22 },
    ],
    bottlenecks: ['Manual exception review affects 11% of invoices', 'Payment sync latency increased in two systems'],
    opportunities: ['Auto-classify recurring invoice exceptions', 'Prioritize high-confidence payment syncs'],
    incidents: ['Automation coverage increased 44 min ago', 'Finance SLA recovered 28 min ago'],
    improvements: ['Expand exception handling rules', 'Monitor ERP latency during peak windows'],
  },
  {
    process: 'Support Resolution',
    team: 'Customer Operations',
    region: 'West',
    businessUnit: 'Software',
    volume: 6388,
    cycleTime: 5.4,
    sla: 98.4,
    automation: 82,
    errorRate: 2.1,
    efficiency: 93,
    trend: [6.3, 6.1, 5.8, 5.6, 5.4],
    steps: [
      { label: 'Triage', percent: 25 },
      { label: 'Routing', percent: 18 },
      { label: 'Resolution', percent: 39 },
      { label: 'Quality Review', percent: 18 },
    ],
    bottlenecks: ['Manual escalation approvals slow premium cases', 'Knowledge base gaps drive repeat tickets'],
    opportunities: ['Reduce support approval thresholds', 'Generate recommended resolution paths'],
    incidents: ['Capacity alert detected 12 min ago', 'Priority case backlog increased today'],
    improvements: ['Route tier-two support to available specialists', 'Refresh support automation prompts'],
  },
  {
    process: 'Contract Review',
    team: 'Sales Operations',
    region: 'Midwest',
    businessUnit: 'Consulting',
    volume: 1248,
    cycleTime: 7.2,
    sla: 94.7,
    automation: 68,
    errorRate: 2.8,
    efficiency: 87,
    trend: [8.1, 7.9, 7.6, 7.4, 7.2],
    steps: [
      { label: 'Document Intake', percent: 18 },
      { label: 'Clause Classification', percent: 27 },
      { label: 'Human Approval', percent: 38 },
      { label: 'Final Routing', percent: 17 },
    ],
    bottlenecks: ['Human approval averages 7.2 hours', 'Clause classification requires manual review'],
    opportunities: ['Expand contract classification', 'Auto-route low-risk renewals'],
    incidents: ['Process bottleneck identified 1 hr ago', 'Manual review queue grew 24%'],
    improvements: ['Add approval thresholds by contract value', 'Classify standard terms automatically'],
  },
  {
    process: 'Lead Qualification',
    team: 'Sales Operations',
    region: 'International',
    businessUnit: 'Software',
    volume: 5620,
    cycleTime: 1.8,
    sla: 95.2,
    automation: 87,
    errorRate: 1.6,
    efficiency: 92,
    trend: [2.3, 2.2, 2.0, 1.9, 1.8],
    steps: [
      { label: 'CRM Sync', percent: 20 },
      { label: 'Fit Scoring', percent: 34 },
      { label: 'Routing', percent: 24 },
      { label: 'Follow-up Queue', percent: 22 },
    ],
    bottlenecks: ['CRM sync adds 1.4 hours during peak demand', 'Manual account matching affects international leads'],
    opportunities: ['Automate international account matching', 'Tune lead scoring threshold by region'],
    incidents: ['CRM sync warning resolved yesterday', 'Scoring model recalibrated this week'],
    improvements: ['Prioritize high-intent routing', 'Add duplicate detection before sales handoff'],
  },
  {
    process: 'Security Triage',
    team: 'Security',
    region: 'West',
    businessUnit: 'Managed Services',
    volume: 2148,
    cycleTime: 2.4,
    sla: 99.2,
    automation: 94,
    errorRate: 0.8,
    efficiency: 98,
    trend: [3.0, 2.8, 2.7, 2.5, 2.4],
    steps: [
      { label: 'Signal Intake', percent: 21 },
      { label: 'Severity Scoring', percent: 32 },
      { label: 'Analyst Review', percent: 26 },
      { label: 'Response Routing', percent: 21 },
    ],
    bottlenecks: ['Analyst review spikes during partner system alerts'],
    opportunities: ['Auto-close low-risk duplicate signals', 'Expand severity scoring to partner telemetry'],
    incidents: ['Risk reviewed 2 hrs ago', 'Partner alert noise dropped 11%'],
    improvements: ['Refine duplicate suppression', 'Increase review automation for low-risk signals'],
  },
];

export const processSorters = {
  Volume: (item) => item.volume,
  'Cycle Time': (item) => -item.cycleTime,
  SLA: (item) => item.sla,
  Automation: (item) => item.automation,
  Efficiency: (item) => item.efficiency,
};

export const slaPerformance = {
  summary: [
    { label: 'Within SLA', value: 96.4 },
    { label: 'At Risk', value: 2.3 },
    { label: 'Breached', value: 1.3 },
  ],
  teams: [
    { label: 'Customer Support', value: 98.4, breaches: 12 },
    { label: 'Finance Operations', value: 96.1, breaches: 18 },
    { label: 'Sales Operations', value: 94.7, breaches: 21 },
    { label: 'Security Operations', value: 99.2, breaches: 4 },
  ],
  trend: [94.3, 95.1, 95.8, 96.0, 96.2, 96.4],
};

export const automationCoverage = [
  { process: 'Invoice Processing', automated: 91, manual: 6, review: 3, upside: '+36 hrs/mo' },
  { process: 'Lead Qualification', automated: 87, manual: 8, review: 5, upside: '+42 hrs/mo' },
  { process: 'Support Resolution', automated: 82, manual: 11, review: 7, upside: '+142 hrs/mo' },
  { process: 'Contract Review', automated: 68, manual: 19, review: 13, upside: '+184 hrs/mo' },
  { process: 'Customer Onboarding', automated: 61, manual: 25, review: 14, upside: '+320 hrs/mo' },
  { process: 'Security Triage', automated: 94, manual: 4, review: 2, upside: '+28 hrs/mo' },
];

export const capacityPlanning = [
  { team: 'Customer Operations', utilization: 91, available: 9, backlog: 1284, projected: 97, risk: 'High' },
  { team: 'Finance Operations', utilization: 82, available: 18, backlog: 638, projected: 84, risk: 'Low' },
  { team: 'Sales Operations', utilization: 87, available: 13, backlog: 412, projected: 91, risk: 'Medium' },
  { team: 'Security', utilization: 76, available: 24, backlog: 143, projected: 79, risk: 'Low' },
  { team: 'Platform Operations', utilization: 84, available: 16, backlog: 372, projected: 88, risk: 'Medium' },
];

export const workloadForecast = {
  next7: { expectedTasks: 9420, peakDay: 'Tuesday', capacityGap: '-3.1%', automationOffset: '+11.6%' },
  next30: { expectedTasks: 38420, peakDay: 'Tuesday', capacityGap: '-6.4%', automationOffset: '+14.8%' },
};

export const operationalRisks = [
  {
    id: 'sla-degradation',
    type: 'SLA Degradation',
    area: 'Customer Support',
    severity: 'Medium',
    detected: '18 minutes ago',
    impact: 'Priority support queues may miss premium response windows if backlog remains elevated.',
    factors: ['premium ticket volume +11%', 'specialist routing delays +9%', 'knowledge base coverage -4%'],
    actions: ['rebalance premium queue', 'raise automation suggestions', 'escalate aging tickets'],
  },
  {
    id: 'capacity-constraint',
    type: 'Capacity Constraint',
    area: 'Customer Operations',
    severity: 'High',
    detected: '42 minutes ago',
    impact: 'SLA may drop below 93% within 48 hours.',
    factors: ['task volume +18%', 'staff availability -6%', 'manual review queue +24%'],
    actions: ['rebalance workload', 'increase automation coverage', 'prioritize high-value accounts'],
  },
  {
    id: 'integration-latency',
    type: 'Integration Latency',
    area: 'Finance Systems',
    severity: 'Medium',
    detected: '56 minutes ago',
    impact: 'Invoice posting delays could increase exception queues before month close.',
    factors: ['ERP latency +13%', 'payment sync retries +8%', 'exception volume +6%'],
    actions: ['throttle noncritical syncs', 'monitor ERP queue', 'pre-clear recurring exceptions'],
  },
  {
    id: 'process-error-spike',
    type: 'Process Error Spike',
    area: 'Contract Review',
    severity: 'Low',
    detected: '1 hr ago',
    impact: 'Manual contract review errors increased slightly but remain below escalation threshold.',
    factors: ['new template variance +5%', 'manual clause edits +7%', 'approval handoffs +3%'],
    actions: ['refresh template rules', 'sample audit recent edits', 'coach approval reviewers'],
  },
];

export const bottlenecks = [
  { blocker: 'Human Approval', process: 'Contract Review', delay: '7.2 hrs', volume: 384, trend: '+8%', automation: 'High' },
  { blocker: 'Customer Verification', process: 'Onboarding', delay: '4.8 hrs', volume: 912, trend: '+12%', automation: 'High' },
  { blocker: 'Manual Exception Review', process: 'Invoice Processing', delay: '3.6 hrs', volume: 624, trend: '-4%', automation: 'Medium' },
  { blocker: 'CRM Sync', process: 'Lead Qualification', delay: '1.4 hrs', volume: 1180, trend: '+3%', automation: 'Medium' },
];

export const efficiencyOpportunities = [
  { title: 'Automate onboarding verification', savings: '320 hrs/month', confidence: '92%', effort: 'Medium', next: 'Connect customer identity checks to onboarding intake.' },
  { title: 'Expand contract classification', savings: '184 hrs/month', confidence: '87%', effort: 'Medium', next: 'Auto-label standard terms before human review.' },
  { title: 'Reduce support approval thresholds', savings: '142 hrs/month', confidence: '84%', effort: 'Low', next: 'Route low-risk premium cases directly to resolution.' },
  { title: 'Optimize invoice exception handling', savings: '96 hrs/month', confidence: '81%', effort: 'Low', next: 'Apply recurring exception rules before manual review.' },
];

export const teamPerformance = [
  { team: 'Customer Operations', throughput: 8420, sla: 97.1, utilization: 91, backlog: 1284, efficiency: 92, trend: '+4.1%' },
  { team: 'Finance Operations', throughput: 7210, sla: 96.1, utilization: 82, backlog: 638, efficiency: 96, trend: '+3.6%' },
  { team: 'Sales Operations', throughput: 6868, sla: 94.7, utilization: 87, backlog: 412, efficiency: 90, trend: '+1.9%' },
  { team: 'Security', throughput: 2148, sla: 99.2, utilization: 76, backlog: 143, efficiency: 98, trend: '+2.8%' },
  { team: 'Platform Operations', throughput: 4920, sla: 95.8, utilization: 84, backlog: 372, efficiency: 91, trend: '+2.2%' },
];

export const teamSorters = {
  Throughput: (item) => item.throughput,
  SLA: (item) => item.sla,
  Utilization: (item) => item.utilization,
  Backlog: (item) => item.backlog,
  Efficiency: (item) => item.efficiency,
};

export const operationsActivity = [
  { title: 'Capacity alert detected', area: 'Customer Operations', time: '12 min ago' },
  { title: 'SLA recovered', area: 'Finance Operations', time: '28 min ago' },
  { title: 'Automation coverage increased', area: 'Invoice Processing', time: '44 min ago' },
  { title: 'Process bottleneck identified', area: 'Contract Review', time: '1 hr ago' },
  { title: 'Risk reviewed', area: 'Security Operations', time: '2 hrs ago' },
];

export const operationsComparison = [
  { label: 'Efficiency', current: '92.7%', previous: '88.5%', variance: '+4.2 pts' },
  { label: 'SLA', current: '96.4%', previous: '94.6%', variance: '+1.8 pts' },
  { label: 'Automation', current: '78.2%', previous: '71.8%', variance: '+6.4 pts' },
  { label: 'Cycle Time', current: '4.8 hrs', previous: '5.6 hrs', variance: '-14.2%' },
  { label: 'Utilization', current: '84.1%', previous: '81.4%', variance: '+2.7 pts' },
  { label: 'Incidents', current: '23', previous: '31', variance: '-8' },
];
