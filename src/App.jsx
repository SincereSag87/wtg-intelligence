import { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Overview from './pages/Overview.jsx';
import Operations from './pages/Operations.jsx';
import Revenue from './pages/Revenue.jsx';

function App() {
  const [activePage, setActivePage] = useState('overview');

  return (
    <DashboardLayout activePage={activePage} onNavigate={setActivePage}>
      {activePage === 'operations' && <Operations onNavigate={setActivePage} />}
      {activePage === 'revenue' && <Revenue />}
      {activePage === 'overview' && <Overview />}
    </DashboardLayout>
  );
}

export default App;
