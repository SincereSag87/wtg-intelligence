import { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Overview from './pages/Overview.jsx';
import Revenue from './pages/Revenue.jsx';

function App() {
  const [activePage, setActivePage] = useState('overview');

  return (
    <DashboardLayout activePage={activePage} onNavigate={setActivePage}>
      {activePage === 'revenue' ? <Revenue /> : <Overview />}
    </DashboardLayout>
  );
}

export default App;
