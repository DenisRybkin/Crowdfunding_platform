import './assets/styles/index.css';
import { Route, Routes } from 'react-router-dom';
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
} from './components/pages';
import { Navbar, Sidebar } from './components/layouts';
import { NavLinks } from './constants/navLinks';

export default function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path={NavLinks.DASHBOARD} element={<Home />} />
          <Route path={NavLinks.PROFILE} element={<Profile />} />
          <Route path={NavLinks.CREATE_CAMPAIGN} element={<CreateCampaign />} />
          <Route
            path={NavLinks.CAMPAIGN_DETAILS + ':id'}
            element={<CampaignDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}
