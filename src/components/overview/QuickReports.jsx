import { Eye, FileText } from 'lucide-react';
import { reports } from '../../data/overviewData.js';

function QuickReports({ onView }) {
  return (
    <section className="panel" aria-labelledby="reports-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Reports</span>
          <h2 id="reports-title">Quick Reports</h2>
        </div>
      </div>

      <div className="report-list">
        {reports.map((report) => (
          <article className="report-item" key={report.title}>
            <span className="report-icon">
              <FileText size={16} aria-hidden="true" />
            </span>
            <div>
              <h3>{report.title}</h3>
              <span>Last generated {report.date}</span>
            </div>
            <button type="button" onClick={() => onView(`Opening ${report.title} report preview.`)}>
              <Eye size={15} aria-hidden="true" />
              View
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default QuickReports;
