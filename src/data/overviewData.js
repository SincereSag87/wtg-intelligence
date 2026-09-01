import {
  BarChart3,
  Brain,
  CalendarClock,
  CircleDollarSign,
  FileBarChart,
  Gauge,
  LineChart,
  Settings,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Zap,
} from 'lucide-react';

export const navigationItems = [
  { label: 'Overview', icon: BarChart3, active: true },
  { label: 'Revenue', icon: CircleDollarSign, future: true },
  { label: 'Operations', icon: Gauge, future: true },
  { label: 'Customers', icon: UsersRound, future: true },
  { label: 'Forecasting', icon: LineChart, future: true },
  { label: 'AI Insights', icon: Brain, future: true },
  { label: 'Reports', icon: FileBarChart, future: true },
  { label: 'Settings', icon: Settings, future: true },
];

export const dateRanges = ['Last 30 Days', 'Quarter to Date', 'Year to Date', 'Trailing 12 Months'];

export const kpis = [
  {
    label: 'Revenue',
    value: '$2.84M',
    change: '+18.4%',
    context: 'vs. prior 30 days',
    tone: 'revenue',
    Icon: CircleDollarSign,
    sparkline: 'M0 30 C14 24 19 28 31 20 C43 12 48 16 60 7',
  },
  {
    label: 'Operational Efficiency',
    value: '92.7%',
    change: '+4.2%',
    context: 'automation-adjusted',
    tone: 'operations',
    Icon: Gauge,
    sparkline: 'M0 26 C12 22 17 23 27 17 C39 10 48 12 60 9',
  },
  {
    label: 'AI-Driven Savings',
    value: '$184K',
    change: '+21.3%',
    context: 'identified this month',
    tone: 'ai',
    Icon: Sparkles,
    sparkline: 'M0 32 C8 27 16 33 25 21 C35 8 47 16 60 6',
  },
  {
    label: 'Forecast Accuracy',
    value: '96.2%',
    change: '+2.1%',
    context: 'weighted model score',
    tone: 'forecast',
    Icon: Target,
    sparkline: 'M0 18 C13 16 19 20 30 17 C41 14 48 12 60 10',
  },
  {
    label: 'Customer Retention',
    value: '94.8%',
    change: '+1.6%',
    context: 'net logo retention',
    tone: 'customer',
    Icon: UsersRound,
    sparkline: 'M0 24 C10 20 18 24 30 19 C42 14 49 15 60 11',
  },
  {
    label: 'Gross Margin',
    value: '68.4%',
    change: '+3.2%',
    context: 'after delivery costs',
    tone: 'margin',
    Icon: TrendingUp,
    sparkline: 'M0 34 C11 27 18 29 29 22 C39 16 47 18 60 9',
  },
];

export const performanceSeries = [
  { month: 'Jan', revenue: 1.92, cost: 1.18, forecast: 1.86 },
  { month: 'Feb', revenue: 2.04, cost: 1.21, forecast: 1.97 },
  { month: 'Mar', revenue: 2.11, cost: 1.22, forecast: 2.08 },
  { month: 'Apr', revenue: 2.25, cost: 1.29, forecast: 2.19 },
  { month: 'May', revenue: 2.31, cost: 1.3, forecast: 2.27 },
  { month: 'Jun', revenue: 2.44, cost: 1.33, forecast: 2.39 },
  { month: 'Jul', revenue: 2.52, cost: 1.36, forecast: 2.48 },
  { month: 'Aug', revenue: 2.61, cost: 1.39, forecast: 2.55 },
  { month: 'Sep', revenue: 2.73, cost: 1.42, forecast: 2.64 },
  { month: 'Oct', revenue: 2.84, cost: 1.45, forecast: 2.61 },
];

export const businessUnits = [
  { name: 'Enterprise Services', revenue: '$1.14M', growth: '+24.8%', attainment: 112 },
  { name: 'Software', revenue: '$742K', growth: '+18.1%', attainment: 104 },
  { name: 'Consulting', revenue: '$621K', growth: '+11.7%', attainment: 96 },
  { name: 'Managed Services', revenue: '$337K', growth: '+7.4%', attainment: 89 },
];

export const operationalMetrics = [
  { label: 'Automation Coverage', value: '78%', percent: 78, status: 'Expanding' },
  { label: 'SLA Performance', value: '96.4%', percent: 96.4, status: 'On Track' },
  { label: 'Team Capacity', value: '84%', percent: 84, status: 'Healthy' },
  { label: 'Critical Risks', value: '3', percent: 30, status: 'Monitored', risk: true },
];

export const customerMetrics = [
  { label: 'Active Customers', value: '1,842' },
  { label: 'Retention', value: '94.8%' },
  { label: 'Expansion Revenue', value: '$328K' },
  { label: 'Accounts at Risk', value: '24' },
];

export const customerDistribution = [
  { label: 'Healthy', value: 74 },
  { label: 'Watch', value: 19 },
  { label: 'At Risk', value: 7 },
];

export const activities = [
  { title: 'Forecast updated', detail: 'Revenue forecast increased by 2.4%', time: '12 min ago', Icon: CalendarClock },
  { title: 'Risk detected', detail: 'Northeast churn risk moved above threshold', time: '38 min ago', Icon: ShieldAlert },
  { title: 'Goal achieved', detail: 'Operations exceeded monthly efficiency target', time: '1 hr ago', Icon: Target },
  { title: 'AI insight generated', detail: 'Enterprise Services identified as primary growth driver', time: '2 hrs ago', Icon: Zap },
];

export const reports = [
  { title: 'Executive Performance', date: 'Aug 31, 2026' },
  { title: 'Revenue Analysis', date: 'Aug 29, 2026' },
  { title: 'Operations Summary', date: 'Aug 28, 2026' },
  { title: 'Customer Health', date: 'Aug 26, 2026' },
  { title: 'Forecast Review', date: 'Aug 25, 2026' },
];

export const insightOpportunities = [
  'Enterprise expansion is outperforming plan',
  'Support automation reduced operating costs',
  'Northeast customer churn risk increased slightly',
];
