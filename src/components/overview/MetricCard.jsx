import { ArrowUpRight } from 'lucide-react';

function MetricCard({ metric }) {
  const { label, value, change, context, tone, Icon, sparkline } = metric;

  return (
    <article className={`metric-card metric-card--${tone}`} tabIndex="0" aria-label={`${label}: ${value}, ${change} ${context}`}>
      <div className="metric-card__top">
        <span className="metric-card__icon">
          <Icon size={18} aria-hidden="true" />
        </span>
        <span className="metric-card__change">
          <ArrowUpRight size={14} aria-hidden="true" />
          {change}
        </span>
      </div>
      <div>
        <h3>{label}</h3>
        <strong>{value}</strong>
        <p>{context}</p>
      </div>
      <svg className="metric-card__sparkline" viewBox="0 0 60 40" role="img" aria-label={`${label} trend is increasing`}>
        <path d={sparkline} />
      </svg>
    </article>
  );
}

export default MetricCard;
