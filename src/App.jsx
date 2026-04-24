import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MobileAccounts from './pages/MobileAccounts';
import PcAccounts from './pages/PcAccounts'; // Import the new PC page

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="accounts/mobile" element={<MobileAccounts />} />
          <Route path="accounts/pc-laptop" element={<PcAccounts />} /> {/* Added this */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}