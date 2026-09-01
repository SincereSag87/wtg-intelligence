import { useState } from 'react';
import AIInsights from './pages/AIInsights.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Customers from './pages/Customers.jsx';
import Forecasting from './pages/Forecasting.jsx';
import Overview from './pages/Overview.jsx';
import Operations from './pages/Operations.jsx';
import Reports from './pages/Reports.jsx';
import Revenue from './pages/Revenue.jsx';
import Settings from './pages/Settings.jsx';

function App() {
  const [activePage, setActivePage] = useState('overview');

  return (
    <DashboardLayout activePage={activePage} onNavigate={setActivePage}>
      {activePage === 'settings' && <Settings />}
      {activePage === 'reports' && <Reports />}
      {activePage === 'ai-insights' && <AIInsights onNavigate={setActivePage} />}
      {activePage === 'forecasting' && <Forecasting onNavigate={setActivePage} />}
      {activePage === 'customers' && <Customers onNavigate={setActivePage} />}
      {activePage === 'operations' && <Operations onNavigate={setActivePage} />}
      {activePage === 'revenue' && <Revenue />}
      {activePage === 'overview' && <Overview />}
    </DashboardLayout>
  );
}

export default App;
